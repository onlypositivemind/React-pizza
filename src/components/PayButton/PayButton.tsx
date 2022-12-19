import React from 'react';
import s from './PayButton.module.scss';

const PayButton: React.FC = React.memo(() => (
	<button className={s.btn}>Оплатить сейчас</button>
));

export default PayButton;