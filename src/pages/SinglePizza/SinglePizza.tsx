import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { BackButton } from 'components';
import SinglePizzaLoader from './SinglePizzaLoader';
import s from './SinglePizza.module.scss';

const SinglePizza: React.FC = () => {
	const [pizza, setPizza] = useState<{ name: string, imageUrl: string, }>({
		name: '',
		imageUrl: '',
	});
	const [isLoading, setIsLoading] = useState<boolean>(true);
	
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