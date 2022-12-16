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

const sortingList: SortItem[] = [
	{ name: 'Сначала популярные', sortBy: 'rating', order: 'desc' },
	{ name: 'Сначала недорогие', sortBy: 'price', order: 'asc' },
	{ name: 'Сначала дорогие', sortBy: 'price', order: 'desc' },
];

const Sort: React.FC = () => {
	const { sortData } = useSelector((state: any) => state.filterSlice);
	const dispatch = useDispatch();
	
	const [isOpen, setIsOpen] = useState(false);
	const sortBlockRef = useRef<HTMLDivElement>(null);
	
	const popupClosingListener = (event: any) => {
		if (!event.path.includes(sortBlockRef?.current)) {
			setIsOpen(false);
			document.body.removeEventListener('click', popupClosingListener);
		}
	};
	
	const onClickListItem = (obj: SortItem) => {
		setIsOpen(false);
		dispatch(setSortData(obj));
	};
	
	const popupHandler = () => {
		setIsOpen(!isOpen);
		document.body.addEventListener('click', popupClosingListener);
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
						sortingList.map((obj) => <li
								key={obj.name}
								onClick={() => onClickListItem(obj)}
								className={sortData.name === obj.name ? s.active : undefined}
							>
								{obj.name}
							</li>
						)}
				</ul>
			</div>
		</div>
	);
};

export default Sort;