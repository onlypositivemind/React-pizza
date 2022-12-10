import { useState } from 'react';
import Arrow from '../../shared/images/icons/sort-arrow.svg';
import s from './Sort.module.scss';

const Sort = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState('популярности');
	
	const sortingList = ['популярности', 'цене', 'алфавиту',];
	
	const onClickListItem = (value) => {
		setSelected(value);
		setIsOpen(false);
	};
	
	return (
		<div className={s.sort}>
			<img
				src={Arrow}
				className={isOpen ? `${s.arrow} ${s.active}` : s.arrow}
				alt="Arrow"
			/>
			<p className={s.title}>Сортировка по :</p>
			<p
				className={s.subtitle}
				onClick={() => setIsOpen(!isOpen)}
			>
				{selected}
			</p>
			<div className={isOpen ? `${s.popup} ${s.active}` : s.popup}>
				<ul>
					{
						sortingList.map((str) => <li
								key={str}
								onClick={() => onClickListItem(str)}
								className={selected === str ? s.active : null}
							>
								{str}
							</li>
						)}
				</ul>
			</div>
		
		</div>
	);
};

export default Sort;