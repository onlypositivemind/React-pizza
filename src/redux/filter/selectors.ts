import { RootState } from 'redux/store';
import { sortObj } from './types';

const getFilterCategory = (state: RootState): number => state.filterSlice.categoryId;
const getFilterSearchValue = (state: RootState): string => state.filterSlice.searchValue;
const getFilterCurrentPage = (state: RootState): number => state.filterSlice.currentPage;
const getFilterSortData = (state: RootState): sortObj => state.filterSlice.sortData;

export {
	getFilterCategory,
	getFilterSearchValue,
	getFilterCurrentPage,
	getFilterSortData,
};