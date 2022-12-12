import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	categoryId: 0,
	sortData: {
		name: 'Сначала популярные',
		sortBy: 'rating',
		order: 'desc',
	},
};

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setCategoryId: (state, action) => {
			state.categoryId = action.payload;
		},
		setSortData: (state, action) => {
			state.sortData = action.payload;
		},
	},
});

export const { setCategoryId, setSortData } = filterSlice.actions;

export default filterSlice.reducer;