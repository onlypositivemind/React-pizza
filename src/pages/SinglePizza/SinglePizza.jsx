import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BackButton from '../../components/BackButton/BackButton';
import SinglePizzaLoader from './SinglePizzaLoader';
import s from './SinglePizza.module.scss';

const SinglePizza = () => {
	const [pizza, setPizza] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const { id } = useParams();
	const navigate = useNavigate();
	
	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axios.get(`https://639487884df9248eada4f54f.mockapi.io/all-pizzas/${id}`);
				setPizza(data);
			} catch (error) {
				alert('Не удалось получить данные');
				navigate('/');
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, [id, navigate]);
	
	return (
		<section className={s.content}>
			{
				isLoading
					? <SinglePizzaLoader />
					: <>
						<div className={s.info}>
							<div className={s.image}>
								<img src={pizza.imageUrl} alt="Pizza" />
							</div>
							<div>
								<p className={s.title}>{pizza.name}</p>
								<p className={s.descr}>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
									cupiditate
									dolor doloribus, dolorum excepturi exercitationem illo odit
									placeat
									praesentium quas quibusdam quisquam, quos rem reprehenderit
									sequi
									temporibus vitae voluptatem voluptates.
								</p>
							</div>
						</div>
						<BackButton />
					</>
			}
		</section>
	);
};

export default SinglePizza;