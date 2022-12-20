import { RootState } from 'redux/store';
import { BasketItem } from './types';

const getBasketItems = (state: RootState): BasketItem[] => state.basketSlice.items;
const getBasketTotalPrice = (state: RootState): number => state.basketSlice.totalPrice;
const getBasketTotalQty = (state: RootState): number => state.basketSlice.totalQty;

const getFindCount = (id: string) => (state: RootState): number => {
	const arr = state.basketSlice.items.filter((obj) => obj.id === id);
	return arr.reduce((acc, obj) => obj.count ? acc + obj.count : acc, 0);
};

export {
	getBasketItems,
	getBasketTotalPrice,
	getBasketTotalQty,
	getFindCount
};