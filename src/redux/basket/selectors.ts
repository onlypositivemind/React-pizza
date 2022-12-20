import { RootState } from 'redux/store';
import { BasketItem } from './types';

const getBasketItems = (state: RootState): BasketItem[] => state.basketSlice.items;
const getBasketTotalPrice = (state: RootState): number => state.basketSlice.totalPrice;
const getBasketTotalQty = (state: RootState): number => state.basketSlice.totalQty;

const getFindCount = (id: string) => (state: RootState): number => state.basketSlice.items
.find((obj) => obj.id === id)?.count || 0;

export {
	getBasketItems,
	getBasketTotalPrice,
	getBasketTotalQty,
	getFindCount
};