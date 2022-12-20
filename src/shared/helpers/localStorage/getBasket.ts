import { BasketItem } from '../../../redux/slices/basketSlice';

const getBasketFromLS = (): BasketItem[] | [] => {
	const data = localStorage.getItem('pizza-basket');
	return data ? JSON.parse(data) : [];
};

export default getBasketFromLS;