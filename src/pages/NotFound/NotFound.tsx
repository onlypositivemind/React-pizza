import React from 'react';
import { Link } from 'react-router-dom';
import s from './NotFound.module.scss';

const NotFound: React.FC = () => {
	return (
		<section className={s.notFound}>
			<h3>404</h3>
			<p className={s.title}>К сожалению, такой страницы не существует :(</p>
			<p className={s.subtitle}>Перейти на
				<Link to="/" className={s.link}> главную</Link>
			</p>
		</section>
	);
};

export default NotFound;