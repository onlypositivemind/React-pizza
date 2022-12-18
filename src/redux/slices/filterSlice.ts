import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type sortObj = {
	name: 'Сначала популярные' | 'Сначала недорогие' | 'Сначала дорогие';
	sortBy: 'rating' | 'price';
	order: 'desc' | 'asc';
	
}

interface IFilterSlice {
	searchValue: string;
	categoryId: number;
	currentPage: number;
	sortData: sortObj;
}

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

export const getFilterCategory = (state: RootState): number => state.filterSlice.categoryId;
export const getFilterSearchValue = (state: RootState): string => state.filterSlice.searchValue;
export const getFilterCurrentPage = (state: RootState): number => state.filterSlice.currentPage;
export const getFilterSortData = (state: RootState): sortObj => state.filterSlice.sortData;

export const {
	setSearchValue,
	setCategoryId,
	setSortData,
	setCurrentPage
} = filterSlice.actions;

export default filterSlice.reducer;