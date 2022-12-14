import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../../redux/slices/filterSlice';
import s from './Categories.module.scss';

const categories = ['Все', 'Мясные', 'Острые', 'С грибами', 'Без мяса'];

const Categories = () => {
	const { categoryId } = useSelector((state) => state.filterSlice);
	const dispatch = useDispatch();
	
	const categoryHandler = (i) => {
		dispatch(setCategoryId(i));
	};
	
	return (
		<div className={s.categories}>
			<ul>
				{
					categories.map((str, index) => <li
							key={str}
							onClick={() => categoryHandler(index)}
							className={categoryId === index ? s.active : null}
						>
							{str}
						</li>
					)}
			</ul>
		</div>
	);
};

export default Categories;