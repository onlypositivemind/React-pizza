import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getFilterCategory, getFilterCurrentPage,
	getFilterSearchValue, getFilterSortData
} from 'redux/slices/filterSlice';
import {
	fetchPizzas,
	getPizzaItems,
	getPizzaStatus
} from 'redux/slices/pizzaSlice';
import MainCard from 'components/MainCard/MainCard';
import MainCardLoader from 'components/MainCard/MainCardLoader';
import Categories from 'components/Categories/Categories';
import Sort from 'components/Sort/Sort';
import Pagination from 'components/Pagination/Pagination';
import s from './AllPizzas.module.scss';

const AllPizzas: React.FC = () => {
	const dispatch = useDispatch();
	
	const searchValue = useSelector(getFilterSearchValue);
	const currentPage = useSelector(getFilterCurrentPage);
	const categoryId = useSelector(getFilterCategory);
	const sortData = useSelector(getFilterSortData);
	
	const status = useSelector(getPizzaStatus);
	const items = useSelector(getPizzaItems);
	
	useEffect(() => {
		const fetchData = async () => {
			
			dispatch(
				// @ts-ignore
				fetchPizzas({
					currentPage,
					categoryId,
					sortData,
					searchValue,
				})
			);
			
		};
		fetchData();
	}, [categoryId, sortData, searchValue, currentPage, dispatch]);
	
	const skeleton = [...Array(4)].map((_, i) => <MainCardLoader key={i} />);
	const pizzas = items.map((obj: any) => <MainCard key={obj.id} {...obj} />);
	
	if (status === 'error') {
		return (
			<section className={s.error}>
				<h3>К сожалению, не удалось получить пиццы :(</h3>
				<p>Попробуйте повторить попытку позже</p>
			</section>
		);
	}
	
	return (
		<section className={s.allPizzas}>
			<div className={s.top}>
				<Categories />
				<Sort />
			</div>
			<h2>Все пиццы</h2>
			<div className={s.pizzasWrapper}>
				{status === 'loading' ? skeleton : pizzas}
			</div>
			{
				!items.length && status !== 'loading'
					? <p className={s.nothing}>Ничего не найдено :(</p>
					: !categoryId && <Pagination />
			}
		</section>
	);
};

export default AllPizzas;