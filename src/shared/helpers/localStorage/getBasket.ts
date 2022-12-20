import { BasketItem } from 'redux/basket/types';

const getBasketFromLS = (): BasketItem[] | [] => {
	const data = localStorage.getItem('pizza-basket');
	return data ? JSON.parse(data) : [];
};

export default getBasketFromLS;