export type sortObj = {
	name: 'Сначала популярные' | 'Сначала недорогие' | 'Сначала дорогие';
	sortBy: 'rating' | 'price';
	order: 'desc' | 'asc';
	
}

export interface IFilterSlice {
	searchValue: string;
	categoryId: number;
	currentPage: number;
	sortData: sortObj;
}