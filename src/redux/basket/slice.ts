import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBasketSlice, BasketItem } from './types';
import getBasketFromLS from 'shared/helpers/localStorage/getBasket';
import calcTotalPrice from 'shared/helpers/calcTotal/calcTotalPrice';
import calcTotalQty from 'shared/helpers/calcTotal/calcTotalQty';

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
			const findItem = state.items.find(
				obj => obj.id === action.payload.id
					&& obj.type === action.payload.type
					&& obj.size === action.payload.size
			);
			
			if (findItem && findItem.count) {
				findItem.count++;
			} else {
				state.items.push({ ...action.payload, count: 1 });
			}
			
			state.totalPrice = calcTotalPrice(state.items);
			state.totalQty = calcTotalQty(state.items);
		},
		
		deleteItem: (state, action: PayloadAction<BasketItem>) => {
			state.items = state.items.filter(
				obj => obj.id !== action.payload.id
					|| obj.type !== action.payload.type
					|| obj.size !== action.payload.size
			);
			
			state.totalPrice = calcTotalPrice(state.items);
			state.totalQty = calcTotalQty(state.items);
		},
		
		plusItem: (state, action: PayloadAction<BasketItem>) => {
			const findItem = state.items.find(
				obj => obj.id === action.payload.id
					&& obj.type === action.payload.type
					&& obj.size === action.payload.size
			);
			if (findItem && findItem.count) {
				findItem.count++;
			}
			
			state.totalPrice = calcTotalPrice(state.items);
			state.totalQty = calcTotalQty(state.items);
		},
		
		minusItem: (state, action: PayloadAction<BasketItem>) => {
			const findItem = state.items.find(
				obj => obj.id === action.payload.id
					&& obj.type === action.payload.type
					&& obj.size === action.payload.size
			);
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

export const {
	addItem,
	deleteItem,
	plusItem,
	minusItem,
	clearItems,
} = basketSlice.actions;

export default basketSlice.reducer;