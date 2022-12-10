import MainCard from '../../components/MainCard/MainCard';
import MainCardLoader from '../../components/MainCard/MainCardLoader';
import Categories from '../../components/Categories/Categories';
import Sort from '../../components/Sort/Sort';
import s from './AllPizzas.module.scss';

const AllPizzas = ({ pizzasDate, isLoading }) => {
	
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
						? [...Array(8)].map((_, index) => <MainCardLoader key={index} />)
						: pizzasDate.map(obj => <MainCard key={obj.id} {...obj} />)
				}
			</div>
		</section>
	);
};

export default AllPizzas;