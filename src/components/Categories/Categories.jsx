import s from './Categories.module.scss';

const Categories = ({ categoryId, categoryHandler }) => {
	const categories = ['Все', 'Мясные', 'Острые', 'С грибами', 'Без мяса'];
	
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