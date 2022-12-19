import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterCategory, setCategoryId } from 'redux/slices/filterSlice';
import s from './Categories.module.scss';

const categories: string[] = ['Все', 'Мясные', 'Острые', 'С грибами', 'Без мяса'];

const Categories: React.FC = React.memo(() => {
	const dispatch = useDispatch();
	const categoryId = useSelector(getFilterCategory);
	
	const categoryHandler = (i: number): void => {
		dispatch(setCategoryId(i));
	};
	
	return (
		<div className={s.categories}>
			<ul>
				{
					categories.map((str, index) => (
							<li
								key={str}
								onClick={() => categoryHandler(index)}
								className={categoryId === index ? s.active : undefined}
							>
								{str}
							</li>
						)
					)}
			</ul>
		</div>
	);
});

export default Categories;