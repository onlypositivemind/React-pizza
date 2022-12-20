import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialState, PizzaItem, Status } from './types';
import fetchPizzas from './asyncActions';

const initialState: IInitialState = {
	items: [],
	status: Status.LOADING,
};

const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	
	reducers: {
		setItems: (state, action: PayloadAction<PizzaItem[]>) => {
			state.items = action.payload;
		},
	},
	
	extraReducers: (builder) => {
		builder.addCase(fetchPizzas.pending, (state) => {
			state.items = [];
			state.status = Status.LOADING;
		});
		
		builder.addCase(fetchPizzas.fulfilled, (state, action) => {
			state.items = action.payload;
			state.status = Status.SUCCESS;
		});
		
		builder.addCase(fetchPizzas.rejected, (state) => {
			state.items = [];
			state.status = Status.ERROR;
		});
	},
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;