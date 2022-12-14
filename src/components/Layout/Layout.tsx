import React, { useEffect, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
	getBasketItems,
	getBasketTotalPrice,
	getBasketTotalQty,
} from 'redux/basket/selectors';
import { getPizzaStatus } from 'redux/pizza/selectors';
import { SearchInput } from 'components/index';
import Logo from 'shared/images/logo.jpg';
import BasketSVG from 'shared/images/icons/header-basket.svg';
import s from './Layout.module.scss';

const Layout: React.FC = () => {
	const basketItems = useSelector(getBasketItems);
	const totalPrice = useSelector(getBasketTotalPrice);
	const totalQty = useSelector(getBasketTotalQty);
	const status = useSelector(getPizzaStatus);
	
	const location = useLocation();
	
	const isMounted = useRef<boolean>(false);
	
	useEffect(() => {
		if (isMounted.current) {
			const json = JSON.stringify(basketItems);
			localStorage.setItem('pizza-basket', json);
		}
		
		isMounted.current = true;
		
	}, [basketItems]);
	
	return (
		<div className={s.wrapper}>
			
			<header
				className={location.pathname === '/' ? `${s.header} ${s.home}` : s.header}
			>
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
							<div
								className={totalPrice < 999 ? s.basketContent : `${s.basketContent} ${s.wide}`}
							>
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