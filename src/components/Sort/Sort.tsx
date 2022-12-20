import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortData } from 'redux/filter/slice';
import { getFilterSortData } from 'redux/filter/selectors';
import { sortObj } from 'redux/filter/types';
import Arrow from 'shared/images/icons/sort-arrow.svg';
import s from './Sort.module.scss';

type M = MouseEvent & { path: Node[]; }

const sortingList: sortObj[] = [
	{ name: 'Сначала популярные', sortBy: 'rating', order: 'desc' },
	{ name: 'Сначала недорогие', sortBy: 'price', order: 'asc' },
	{ name: 'Сначала дорогие', sortBy: 'price', order: 'desc' },
];

const Sort: React.FC = React.memo(() => {
	const dispatch = useDispatch();
	const sortData = useSelector(getFilterSortData);
	
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const sortBlockRef = useRef<HTMLDivElement>(null);
	
	const popupClosingHandler = (event: MouseEvent): void => {
		const e = event as M;
		
		if (sortBlockRef.current && !e.path.includes(sortBlockRef.current)) {
			setIsOpen(false);
			document.body.removeEventListener('click', popupClosingHandler);
		}
	};
	
	const onClickListItem = (obj: sortObj): void => {
		setIsOpen(false);
		dispatch(setSortData(obj));
	};
	
	const popupHandler = (): void => {
		setIsOpen(!isOpen);
		document.body.addEventListener('click', popupClosingHandler);
	};
	
	return (
		<div ref={sortBlockRef} className={s.sort}>
			<img
				src={Arrow}
				className={isOpen ? `${s.arrow} ${s.active}` : s.arrow}
				alt="Arrow"
			/>
			<p className={s.title}>Сортировка:</p>
			<p
				className={s.subtitle}
				onClick={popupHandler}
			>
				{sortData.name}
			</p>
			<div className={isOpen ? `${s.popup} ${s.active}` : s.popup}>
				<ul>
					{
						sortingList.map((obj) => (
								<li
									key={obj.name}
									onClick={() => onClickListItem(obj)}
									className={sortData.name === obj.name ? s.active : undefined}
								>
									{obj.name}
								</li>
							)
						)}
				</ul>
			</div>
		</div>
	);
});

export default Sort;