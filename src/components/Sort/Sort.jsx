import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortData } from '../../redux/slices/filterSlice';
import Arrow from '../../shared/images/icons/sort-arrow.svg';
import s from './Sort.module.scss';

const sortingList = [
	{ name: 'Сначала популярные', sortBy: 'rating', order: 'desc' },
	{ name: 'Сначала недорогие', sortBy: 'price', order: 'asc' },
	{ name: 'Сначала дорогие', sortBy: 'price', order: 'desc' },
];

const Sort = () => {
	const sortData = useSelector((state) => state.filterSlice.sortData);
	const dispatch = useDispatch();
	
	const [isOpen, setIsOpen] = useState(false);
	
	const onClickListItem = (obj) => {
		setIsOpen(false);
		dispatch(setSortData(obj));
	};
	
	return (
		<div className={s.sort}>
			<img
				src={Arrow}
				className={isOpen ? `${s.arrow} ${s.active}` : s.arrow}
				alt="Arrow"
			/>
			<p className={s.title}>Сортировка:</p>
			<p
				className={s.subtitle}
				onClick={() => setIsOpen(!isOpen)}
			>
				{sortData.name}
			</p>
			<div className={isOpen ? `${s.popup} ${s.active}` : s.popup}>
				<ul>
					{
						sortingList.map((obj) => <li
								key={obj.name}
								onClick={() => onClickListItem(obj)}
								className={sortData.name === obj.name ? s.active : null}
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