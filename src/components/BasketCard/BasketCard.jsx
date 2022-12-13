import DeleteSVG from '../../shared/images/icons/delete-basket-i.svg';
import MinusSVG from '../../shared/images/icons/basket-minus.svg';
import PlusSVG from '../../shared/images/icons/basket-plus.svg';
import s from './BasketCard.module.scss';

const BasketCard = () => {
	return (
		<div className={s.cardWrapper}>
			<img
				src="https://dodopizza-a.akamaihd.net/static/Img/Products/27c9bbd0af3a4d1d84a086d9c2f1656d_292x292.webp"
				className={s.pizzaImage}
				alt="Pizza" />
			<div className={s.text}>
				<p>Сырный цыпленок</p>
				<span>тонкое тесто, 26 см.</span>
			</div>
			<div className={s.qtyBlock}>
				<img src={MinusSVG} alt="Minus" />
				<p>2</p>
				<img src={PlusSVG} alt="Plus" />
			</div>
			<p className={s.price}>770 ₽</p>
			<img src={DeleteSVG} className={s.delete} alt="Delete" />
		</div>
	);
};

export default BasketCard;