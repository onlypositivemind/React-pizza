import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilterSlice, sortObj } from './types';

const initialState: IFilterSlice = {
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
		setSearchValue: (state, action: PayloadAction<string>) => {
			state.searchValue = action.payload;
		},
		
		setCategoryId: (state, action: PayloadAction<number>) => {
			state.categoryId = action.payload;
		},
		
		setSortData: (state, action: PayloadAction<sortObj>) => {
			state.sortData = action.payload;
		},
		
		setCurrentPage: (state, action: PayloadAction<number>) => {
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