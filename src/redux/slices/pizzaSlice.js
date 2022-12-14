import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasData', async (params) => {
		const { currentPage, categoryId, sortData, searchValue, } = params;
		
		const { data } = await axios.get(`https://639487884df9248eada4f54f.mockapi.io/all-pizzas?
				page=${currentPage}&limit=4&
				${categoryId ? 'category=' + categoryId : ''}
				&sortBy=${sortData.sortBy}&order=${sortData.order}
				${searchValue ? `&search=${searchValue}` : ''}`);
		
		return data;
	}
);

const initialState = {
	items: [],
	status: 'loading',
};

const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		setItems: (state, action) => {
			state.items = action.payload;
		},
	},
	extraReducers: {
		[fetchPizzas.pending]: (state) => {
			state.items = [];
			state.status = 'loading';
		},
		[fetchPizzas.fulfilled]: (state, action) => {
			state.items = action.payload;
			state.status = 'ok';
		},
		[fetchPizzas.rejected]: (state) => {
			state.items = [];
			state.status = 'error';
		},
	},
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;