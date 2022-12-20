import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import basketSlice from 'redux/basket/slice';
import filterSlice from 'redux/filter/slice';
import pizzaSlice from 'redux/pizza/slice';

export const store = configureStore({
	reducer: {
		filterSlice,
		basketSlice,
		pizzaSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();