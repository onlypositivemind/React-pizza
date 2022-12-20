import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearItems } from 'redux/basket/slice';
import {
	getBasketItems,
	getBasketTotalPrice,
	getBasketTotalQty,
} from 'redux/basket/selectors';
import EmptyBasket from './EmptyBasket';
import BasketCard from 'components/BasketCard/BasketCard';
import BackButton from 'components/BackButton/BackButton';
import PayButton from 'components/PayButton/PayButton';
import BasketSVG from 'shared/images/icons/basket.svg';
import DeleteSVG from 'shared/images/icons/trash.svg';
import s from './Basket.module.scss';

const Basket: React.FC = () => {
	const dispatch = useDispatch();
	const items = useSelector(getBasketItems);
	const totalPrice = useSelector(getBasketTotalPrice);
	const totalQty = useSelector(getBasketTotalQty);
	
	const onClickClear = (): void => {
		dispatch(clearItems());
	};
	
	if (!items.length) {
		return <EmptyBasket />;
	}
	
	return (
		<section className={s.content}>
			<div className={s.contentHeader}>
				<div className={s.left}>
					<img src={BasketSVG} alt="Basket" />
					<h2>Корзина</h2>
				</div>
				<div className={s.right} onClick={onClickClear}>
					<img src={DeleteSVG} alt="Clear" />
					<p>Очистить корзину</p>
				</div>
			</div>
			<div className={s.cardsWrapper}>
				{
					items.map((item, index) => <BasketCard key={index} {...item} />)
				}
			</div>
			<div className={s.info}>
				<p>Всего пицц: <span>{totalQty} шт.</span></p>
				<p>Сумма заказа: <span className={s.price}>{totalPrice} ₽</span></p>
			</div>
			<div className={s.buttons}>
				<BackButton />
				<PayButton />
			</div>
		</section>
	);
};

export default Basket;