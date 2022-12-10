import { Link, Outlet } from 'react-router-dom';
import Logo from '../../shared/images/logo.jpg';
import BasketSVG from '../../shared/images/icons/header-basket.svg';
import s from './Layout.module.scss';

const Layout = () => {
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
				<div className={s.headerRight}>
					<Link to="/basket">
						<div className={s.basketContent}>
							<span>0 ₽</span>
							<p>
								<img src={BasketSVG} alt="Basket icon" />
								<span>0</span>
							</p>
						</div>
					</Link>
				</div>
			</header>
			
			<main className={s.main}>
				<Outlet />
			</main>
		
		</div>
	);
};

export default Layout;