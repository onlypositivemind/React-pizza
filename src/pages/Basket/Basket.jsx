import BackButton from '../../components/BackButton/BackButton';
import Emoji from '../../shared/images/emoji-basket.jpg';
import SVG from '../../shared/images/icons/man-with-basket.svg';
import s from './Basket.module.scss';

const Basket = () => {
	return (
		<section className={s.emptyBasket}>
			<div className={s.top}>
				<h3>Корзина пустая</h3>
				<img src={Emoji} alt="Sad smile" />
			</div>
			<div className={s.textContent}>
				<p>Вероятней всего, вы не заказывали ещё пиццу.</p>
				<p>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
			</div>
			<img src={SVG} className={s.image} alt="Man with basket" />
			<BackButton />
		</section>
	);
};

export default Basket;