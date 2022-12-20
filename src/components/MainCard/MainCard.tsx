import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from 'redux/basket/slice';
import { getFindCount } from 'redux/basket/selectors';
import { BasketItem } from 'redux/basket/types';
import s from './MainCard.module.scss';

type MainCardProps = {
	id: string;
	name: string;
	price: number;
	imageUrl: string;
	sizes: number[];
	types: number[];
}

const typesName: string[] = ['тонкое', 'традиционное'];

const MainCard: React.FC<MainCardProps> = (
	{
		id,
		name,
		price,
		imageUrl,
		sizes,
		types
	}) => {
	const dispatch = useDispatch();
	const count = useSelector(getFindCount(id));
	
	const [activeType, setActiveType] = useState<number>(0);
	const [activeSize, setActiveSize] = useState<number>(0);
	
	const onClickAdd = (): void => {
		const item: BasketItem = {
			id,
			name,
			price,
			imageUrl,
			type: typesName[activeType],
			size: sizes[activeSize],
		};
		dispatch(addItem(item));
	};
	
	const onClickType = (i: number): void => {
		setActiveType(i);
	};
	
	const onClickSize = (i: number): void => {
		setActiveSize(i);
	};
	
	return (
		<div className={s.cardWrapper}>
			<Link to={`/pizza/${id}`}>
				<div className={s.pizzaImage}>
					<img src={imageUrl} alt="Pizza" />
				</div>
			</Link>
			<h3>{name}</h3>
			<div className={s.selectorBlock}>
				<ul className={s.doughSelection}>
					{
						types.map((typeNumber, index) => <li
								key={typeNumber}
								className={activeType === index ? s.active : undefined}
								onClick={() => onClickType(index)}
							>
								{typesName[typeNumber]}
							</li>
						)}
				</ul>
				<ul className={s.sizeSelection}>
					{
						sizes.map((size, index) => <li
								key={size}
								className={activeSize === index ? s.active : undefined}
								onClick={() => onClickSize(index)}
							>
								{`${size} см.`}
							</li>
						)}
				</ul>
			</div>
			<div className={s.bottom}>
				<p>от {price} ₽</p>
				<button className={s.addButton} onClick={onClickAdd}>
					<svg width="12" height="12" viewBox="0 0 12 12" fill="none"
					     xmlns="http://www.w3.org/2000/svg">
						<path
							d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
							fill="white" />
					</svg>
					<span>Добавить</span>
					{!!count && <span className={s.qty}>{count}</span>}
				</button>
			</div>
		</div>
	);
};

export default MainCard;