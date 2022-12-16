import React from 'react';
import s from './PayButton.module.scss';

const PayButton: React.FC = () => {
	return <button className={s.btn}>Оплатить сейчас</button>;
};

export default PayButton;