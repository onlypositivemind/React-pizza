import MainCard from '../../components/MainCard/MainCard';
import s from './AllPizzas.module.scss';

const AllPizzas = () => {
	return (
		<section className={s.allPizzas}>
			<h2>Все пиццы</h2>
			<div className={s.pizzasWrapper}>
				<MainCard />
				<MainCard />
				<MainCard />
				<MainCard />
			</div>
		</section>
	);
};

export default AllPizzas;