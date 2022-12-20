import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchPizzasArgs, PizzaItem } from './types';
import axios from 'axios';

const fetchPizzas = createAsyncThunk('pizza/fetchPizzasData', async (params: FetchPizzasArgs) => {
	const { currentPage, categoryId, sortData, searchValue, } = params;
	
	const { data } = await axios.get<PizzaItem[]>(`
				https://639487884df9248eada4f54f.mockapi.io/all-pizzas?
				page=${currentPage}&limit=4&
				${categoryId ? 'category=' + categoryId : ''}
				&sortBy=${sortData.sortBy}&order=${sortData.order}
				${searchValue ? `&search=${searchValue}` : ''}
		`);
	
	return data as PizzaItem[];
});

export default fetchPizzas;