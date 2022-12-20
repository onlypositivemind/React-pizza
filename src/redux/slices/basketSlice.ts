import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import getBasketFromLS from 'shared/helpers/localStorage/getBasket';
import calcTotalPrice from '../../shared/helpers/calcTotal/calcTotalPrice';
import calcTotalQty from '../../shared/helpers/calcTotal/calcTotalQty';

export type BasketItem = {
	id: string;
	name: string;
	price: number;
	imageUrl: string;
	type: string;
	size: number;
	count?: number;
}

interface IBasketSlice {
	items: BasketItem[];
	totalPrice: number;
	totalQty: number;
}

const initialState: IBasketSlice = {
	items: getBasketFromLS(),
	totalPrice: calcTotalPrice(getBasketFromLS()),
	totalQty: calcTotalQty(getBasketFromLS()),
};

const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<BasketItem>) => {
			const findItem = state.items.find(obj => obj.id === action.payload.id);
			
			if (findItem && findItem.count) {
				findItem.count++;
			} else {
				state.items.push({ ...action.payload, count: 1 });
			}
			
			state.totalPrice = calcTotalPrice(state.items);
			state.totalQty = calcTotalQty(state.items);
		},
		
		deleteItem: (state, action: PayloadAction<string>) => {
			state.items = state.items.filter(obj => obj.id !== action.payload);
			
			state.totalPrice = calcTotalPrice(state.items);
			state.totalQty = calcTotalQty(state.items);
		},
		
		plusItem: (state, action: PayloadAction<string>) => {
			const findItem = state.items.find(obj => obj.id === action.payload);
			if (findItem && findItem.count) {
				findItem.count++;
			}
			
			state.totalPrice = calcTotalPrice(state.items);
			state.totalQty = calcTotalQty(state.items);
		},
		
		minusItem: (state, action: PayloadAction<string>) => {
			const findItem = state.items.find(obj => obj.id === action.payload);
			if (findItem && findItem.count) {
				findItem.count--;
			}
			
			state.totalPrice = calcTotalPrice(state.items);
			state.totalQty = calcTotalQty(state.items);
		},
		
		clearItems: (state) => {
			state.items = [];
			state.totalQty = 0;
			state.totalPrice = 0;
		}
	},
});

export const getBasketItems = (state: RootState): BasketItem[] => state.basketSlice.items;
export const getBasketTotalPrice = (state: RootState): number => state.basketSlice.totalPrice;
export const getBasketTotalQty = (state: RootState): number => state.basketSlice.totalQty;

export const selectFindCount = (id: string) => (state: RootState): number => state.basketSlice.items
.find((obj) => obj.id === id)?.count || 0;

export const {
	addItem,
	deleteItem,
	plusItem,
	minusItem,
	clearItems,
} = basketSlice.actions;

export default basketSlice.reducer;