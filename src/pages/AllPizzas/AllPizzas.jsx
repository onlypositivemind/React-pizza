import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import MainCard from '../../components/MainCard/MainCard';
import MainCardLoader from '../../components/MainCard/MainCardLoader';
import Categories from '../../components/Categories/Categories';
import Sort from '../../components/Sort/Sort';
import Pagination from '../../components/Pagination/Pagination';
import s from './AllPizzas.module.scss';

const AllPizzas = ({ searchValue }) => {
	const { categoryId, sortData } = useSelector((state) => state.filterSlice);
	
	const [pizzasDate, setPizzasDate] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	
	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				
				const { data } = await axios.get(`
				https://639487884df9248eada4f54f.mockapi.io/all-pizzas?
				page=${currentPage}&limit=4&
				${categoryId ? 'category=' + categoryId : ''}
				&sortBy=${sortData.sortBy}&order=${sortData.order}
				${searchValue ? `&search=${searchValue}` : ''}
				`);
				
				setPizzasDate(data);
			} catch (error) {
				alert('Не удалось загрузить данные');
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, [categoryId, sortData, searchValue, currentPage]);
	
	return (
		<section className={s.allPizzas}>
			<div className={s.top}>
				<Categories />
				<Sort />
			</div>
			<h2>Все пиццы</h2>
			<div className={s.pizzasWrapper}>
				{
					isLoading
						? [...Array(4)].map((_, index) => <MainCardLoader
							key={index} />)
						: pizzasDate.map(obj => <MainCard key={obj.id} {...obj} />)
				}
			</div>
			{
				!pizzasDate.length
					? <>
						<p className={s.nothing}>Ничего не найдено :(</p>
						<Pagination
							changePageHandler={(pageNumber) => setCurrentPage(pageNumber)}
						/>
					</>
					
					: <Pagination
						changePageHandler={(pageNumber) => setCurrentPage(pageNumber)}
					/>
			}
		</section>
	);
};

export default AllPizzas;