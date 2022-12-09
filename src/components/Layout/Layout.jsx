import { NavLink, Outlet } from 'react-router-dom';
import Logo from '../../shared/images/logo.jpg';
import BasketSVG from '../../shared/images/icons/header-basket.svg';
import s from './Layout.module.scss';

const Layout = () => {
	return (
		<div className={s.wrapper}>
			
			<header className={s.header}>
				<NavLink to="/">
					<div className={s.headerLeft}>
						<img src={Logo} alt="Logo" />
						<div className={s.logoContent}>
							<h1>REACT PIZZA</h1>
							<p>самая вкусная пицца во вселенной</p>
						</div>
					</div>
				</NavLink>
				<div className={s.headerRight}>
					<NavLink to="/basket">
						<div className={s.basketContent}>
							<span>520 ₽</span>
							<p>
								<img src={BasketSVG} alt="Basket icon" />
								<span>3</span>
							</p>
						</div>
					</NavLink>
				</div>
			</header>
			
			<main className={s.main}>
				<Outlet />
			</main>
		
		</div>
	);
};

export default Layout;