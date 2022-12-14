import { useDispatch, useSelector } from 'react-redux';
import { clearItems } from '../../redux/slices/basketSlice';
import EmptyBasket from './EmptyBasket';
import BasketCard from '../../components/BasketCard/BasketCard';
import BackButton from '../../components/BackButton/BackButton';
import PayButton from '../../components/PayButton/PayButton';
import BasketSVG from '../../shared/images/icons/basket.svg';
import DeleteSVG from '../../shared/images/icons/trash.svg';
import s from './Basket.module.scss';

const Basket = () => {
	const {
		items,
		totalPrice,
		totalQty
	} = useSelector((state) => state.basketSlice);
	
	const dispatch = useDispatch();
	
	const onClickClear = () => {
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
					<img src={DeleteSVG} alt="Delete" />
					<p>Очистить корзину</p>
				</div>
			</div>
			<div className={s.cardsWrapper}>
				{
					items.map(item => <BasketCard key={item.id} {...item} />)
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