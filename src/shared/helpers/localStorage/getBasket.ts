import { BasketItem } from '../../../redux/slices/basketSlice';

const getBasketFromLS = (): BasketItem[] | [] => {
	const data = localStorage.getItem('basket');
	return data ? JSON.parse(data) : [];
};

export default getBasketFromLS;