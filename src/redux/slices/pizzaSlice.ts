import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { sortObj } from './filterSlice';

type FetchPizzasArgs = {
	currentPage: number;
	categoryId: number;
	sortData: sortObj;
	searchValue: string;
}

type PizzaItem = {
	id: string;
	name: string;
	price: number;
	imageUrl: string;
	sizes: number[];
	types: number[];
}

enum Status {
	LOADING = 'loading',
	SUCCESS = 'ok',
	ERROR = 'error',
}

interface IInitialState {
	items: PizzaItem[];
	status: Status;
}

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasData', async (params: FetchPizzasArgs) => {
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

export const getPizzaItems = (state: RootState): PizzaItem[] => state.pizzaSlice.items;
export const getPizzaStatus = (state: RootState): Status => state.pizzaSlice.status;

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;