import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	searchValue: '',
	categoryId: 0,
	currentPage: 1,
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
		setSearchValue: (state, action) => {
			state.searchValue = action.payload;
		},
		setCategoryId: (state, action) => {
			state.categoryId = action.payload;
		},
		setSortData: (state, action) => {
			state.sortData = action.payload;
		},
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload;
		}
	},
});

export const {
	setSearchValue,
	setCategoryId,
	setSortData,
	setCurrentPage
} = filterSlice.actions;

export default filterSlice.reducer;