import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortData } from '../../redux/slices/filterSlice';
import Arrow from '../../shared/images/icons/sort-arrow.svg';
import s from './Sort.module.scss';

type SortItem = {
	name: string;
	sortBy: string;
	order: string;
}

type M = MouseEvent & { path: Node[]; }

const sortingList: SortItem[] = [
	{ name: 'Сначала популярные', sortBy: 'rating', order: 'desc' },
	{ name: 'Сначала недорогие', sortBy: 'price', order: 'asc' },
	{ name: 'Сначала дорогие', sortBy: 'price', order: 'desc' },
];

const Sort: React.FC = () => {
	const { sortData } = useSelector((state: any) => state.filterSlice);
	const dispatch = useDispatch();
	
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const sortBlockRef = useRef<HTMLDivElement>(null);
	
	const popupClosingHandler = (event: MouseEvent): void => {
		const e = event as M;
		
		if (sortBlockRef.current && !e.path.includes(sortBlockRef.current)) {
			setIsOpen(false);
			document.body.removeEventListener('click', popupClosingHandler);
		}
	};
	
	const onClickListItem = (obj: SortItem): void => {
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
};

export default Sort;