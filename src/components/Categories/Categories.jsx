import { useState } from 'react';
import s from './Categories.module.scss';

const Categories = () => {
	const categories = ['Все', 'Мясные', 'Вегатерианские ', 'Гриль', 'Острые', 'Закрытые',];
	
	const [activeCategory, setActiveCategory] = useState(0);
	
	const onClickCategory = (i) => {
		setActiveCategory(i);
	};
	
	return (
		<div className={s.categories}>
			<ul>
				{
					categories.map((str, index) => <li
							key={str}
							onClick={() => onClickCategory(index)}
							className={activeCategory === index ? s.active : null}
						>
							{str}
						</li>
					)}
			</ul>
		</div>
	);
};

export default Categories;