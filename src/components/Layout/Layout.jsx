import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchInput from '../SearchInput/SearchInput';
import Logo from '../../shared/images/logo.jpg';
import BasketSVG from '../../shared/images/icons/header-basket.svg';
import s from './Layout.module.scss';

const Layout = () => {
	const { totalPrice, totalQty } = useSelector((state) => state.basketSlice);
	const { status } = useSelector((state) => state.pizzaSlice);
	
	return (
		<div className={s.wrapper}>
			
			<header className={s.header}>
				<Link to="/">
					<div className={s.headerLeft}>
						<img src={Logo} alt="Logo" />
						<div className={s.logoContent}>
							<h1>REACT PIZZA</h1>
							<p>самая вкусная пицца во вселенной</p>
						</div>
					</div>
				</Link>
				{
					status !== 'error' &&
					<div className={s.headerRight}>
						<SearchInput />
						<Link to="/basket">
							<div className={s.basketContent}>
								<span>{totalPrice} ₽</span>
								<p>
									<img src={BasketSVG} alt="Basket icon" />
									<span>{totalQty}</span>
								</p>
							</div>
						</Link>
					</div>
				}
			</header>
			
			<main className={s.main}>
				<Outlet />
			</main>
		
		</div>
	);
};

export default Layout;