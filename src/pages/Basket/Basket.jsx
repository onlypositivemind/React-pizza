import { useSelector } from 'react-redux';
import EmptyBasket from './EmptyBasket';
import BasketCard from '../../components/BasketCard/BasketCard';
import BackButton from '../../components/BackButton/BackButton';
import PayButton from '../../components/PayButton/PayButton';
import BasketSVG from '../../shared/images/icons/basket.svg';
import DeleteSVG from '../../shared/images/icons/trash.svg';
import s from './Basket.module.scss';

const Basket = () => {
	const items = useSelector((state) => state.basketSlice.items);
	
	return (
		<>
			{
				!!items.length
					? <section className={s.content}>
						<div className={s.contentHeader}>
							<div className={s.left}>
								<img src={BasketSVG} alt="Basket" />
								<h2>Корзина</h2>
							</div>
							<div className={s.right}>
								<img src={DeleteSVG} alt="Delete" />
								<p>Очистить корзину</p>
							</div>
						</div>
						<div className={s.cardsWrapper}>
							<BasketCard />
							<BasketCard />
						</div>
						<div className={s.info}>
							<p>Всего пицц: <span>0 шт.</span></p>
							<p>Сумма заказа: <span className={s.price}>0 ₽</span></p>
						</div>
						<div className={s.buttons}>
							<BackButton />
							<PayButton />
						</div>
					</section>
					: <EmptyBasket />
			}
		</>
	);
};

export default Basket;