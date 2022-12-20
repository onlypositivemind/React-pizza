import { sortObj } from 'redux/filter/types';

export type FetchPizzasArgs = {
	currentPage: number;
	categoryId: number;
	sortData: sortObj;
	searchValue: string;
}

export type PizzaItem = {
	id: string;
	name: string;
	price: number;
	imageUrl: string;
	sizes: number[];
	types: number[];
}

export enum Status {
	LOADING = 'loading',
	SUCCESS = 'ok',
	ERROR = 'error',
}

export interface IInitialState {
	items: PizzaItem[];
	status: Status;
}
