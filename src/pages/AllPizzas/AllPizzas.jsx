import { useEffect, useState } from 'react';
import axios from 'axios';
import MainCard from '../../components/MainCard/MainCard';
import MainCardLoader from '../../components/MainCard/MainCardLoader';
import Categories from '../../components/Categories/Categories';
import Sort from '../../components/Sort/Sort';
import s from './AllPizzas.module.scss';

const AllPizzas = () => {
	const [pizzasDate, setPizzasDate] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	
	const [categoryId, setCategoryId] = useState(0);
	const [sortData, setSortData] = useState({
		name: 'Сначала популярные',
		sortBy: 'rating',
		order: 'desc',
	});
	
	const categoryHandler = (i) => {
		setCategoryId(i);
	};
	
	const sortDataHandler = (obj) => {
		setSortData(obj);
	};
	
	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				
				const { data } = await axios.get(`
				https://639487884df9248eada4f54f.mockapi.io/all-pizzas?
				${!categoryId ? '' : 'category=' + categoryId}
				&sortBy=${sortData.sortBy}&order=${sortData.order}
				`);
				
				setPizzasDate(data);
			} catch (error) {
				alert('Не удалось загрузить данные');
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, [categoryId, sortData]);
	
	return (
		<section className={s.allPizzas}>
			<div className={s.top}>
				<Categories
					categoryId={categoryId}
					categoryHandler={categoryHandler}
				/>
				<Sort
					sortData={sortData}
					sortDataHandler={sortDataHandler}
				/>
			</div>
			<h2>Все пиццы</h2>
			<div className={s.pizzasWrapper}>
				{
					isLoading
						? [...Array(!categoryId ? 8 : 4)].map((_, index) => <MainCardLoader
							key={index} />)
						: pizzasDate.map(obj => <MainCard key={obj.id} {...obj} />)
				}
			</div>
		</section>
	);
};

export default AllPizzas;