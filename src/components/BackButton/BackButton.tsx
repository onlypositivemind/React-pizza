import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './BackButton.module.scss';

const BackButton: React.FC = () => {
	const navigate = useNavigate();
	
	const goBack = () => {
		navigate(-1);
	};
	
	return <button onClick={goBack} className={s.btn}>Вернуться назад</button>;
	
};

export default BackButton;