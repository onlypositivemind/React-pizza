import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem, plusItem, minusItem } from 'redux/basket/slice';
import { BasketItem } from 'redux/basket/types';
import DeleteSVG from 'shared/images/icons/delete-basket-i.svg';
import MinusSVG from 'shared/images/icons/basket-minus.svg';
import PlusSVG from 'shared/images/icons/basket-plus.svg';
import s from './BasketCard.module.scss';

const BasketCard: React.FC<BasketItem> = (
	{
		id,
		name,
		price,
		imageUrl,
		type,
		size,
		count = 0
	}) => {
	const dispatch = useDispatch();
	
	const item: BasketItem = {
		id,
		name,
		price,
		imageUrl,
		type,
		size,
	};
	
	const onClickPlus = (): void => {
		dispatch(plusItem(item));
	};
	const onClickMinus = (): void => {
		dispatch(minusItem(item));
	};
	
	const onClickDelete = (): void => {
		dispatch(deleteItem(item));
	};
	
	return (
		<div className={s.cardWrapper}>
			<img
				src={imageUrl}
				className={s.pizzaImage}
				alt="Pizza" />
			<div className={s.text}>
				<p>{name}</p>
				<span>{type}, {size} см.</span>
			</div>
			<div className={s.qtyBlock}>
				<img
					src={MinusSVG}
					className={count > 1 ? s.minus : `${s.minus} ${s.hidden}`}
					onClick={onClickMinus}
					alt="Minus"
				/>
				<p>{count}</p>
				<img
					src={PlusSVG}
					className={s.plus}
					onClick={onClickPlus}
					alt="Plus"
				/>
			</div>
			<p className={s.price}>{price * count} ₽</p>
			<img
				src={DeleteSVG}
				className={s.delete}
				onClick={onClickDelete}
				alt="Delete"
			/>
		</div>
	);
};

export default BasketCard;