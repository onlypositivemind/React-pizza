import { Link, Outlet } from 'react-router-dom';
import { useCallback, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import Logo from '../../shared/images/logo.jpg';
import BasketSVG from '../../shared/images/icons/header-basket.svg';
import Search from '../../shared/images/icons/search.svg';
import Clear from '../../shared/images/icons/clear.svg';
import s from './Layout.module.scss';

const Layout = ({ setSearchValue }) => {
	const [localValue, setLocalValue] = useState('');
	
	const inputSearchRef = useRef();
	
	const inputClearHandler = () => {
		setSearchValue('');
		setLocalValue('');
		inputSearchRef.current.focus();
	};
	
	const updateSearchValue = useCallback(
		debounce((str) => {
			setSearchValue(str);
		}, 400),
		[]
	);
	
	const inputChangeHandler = (event) => {
		setLocalValue(event.target.value);
		updateSearchValue(event.target.value);
	};
	
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
				<div className={s.searchBlock}>
					<img src={Search} className={s.searchIcon} alt="Search" />
					<input
						ref={inputSearchRef}
						value={localValue}
						onChange={inputChangeHandler}
						type="text"
						placeholder="Поиск пицц..."
					/>
					{
						localValue &&
						<img
							onClick={inputClearHandler}
							src={Clear}
							className={s.clearIcon}
							alt="Clear" />
					}
				</div>
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