import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
	totalPrice: 0,
	totalQty: 0,
};

const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addItem: (state, action) => {
			const findItem = state.items.find(obj => obj.id === action.payload.id);
			
			if (findItem) {
				findItem.count++;
			} else {
				state.items.push({ ...action.payload, count: 1 });
			}
			
			state.totalPrice = state.items.reduce((acc, obj) => acc + obj.price * obj.count, 0);
			state.totalQty = state.items.reduce((acc, obj) => acc + obj.count, 0);
		},
		deleteItem: (state, action) => {
			state.items = state.items.filter(obj => obj.id !== action.payload);
			
			state.totalPrice = state.items.reduce((acc, obj) => acc + obj.price * obj.count, 0);
			state.totalQty = state.items.reduce((acc, obj) => acc + obj.count, 0);
		},
		minusItem: (state, action) => {
			const findItem = state.items.find(obj => obj.id === action.payload);
			findItem.count--;
			
			state.totalPrice = state.items.reduce((acc, obj) => acc + obj.price * obj.count, 0);
			state.totalQty = state.items.reduce((acc, obj) => acc + obj.count, 0);
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
	minusItem,
	clearItems,
} = basketSlice.actions;

export default basketSlice.reducer;