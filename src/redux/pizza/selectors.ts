import { RootState } from '../store';
import { PizzaItem, Status } from './types';

const getPizzaItems = (state: RootState): PizzaItem[] => state.pizzaSlice.items;
const getPizzaStatus = (state: RootState): Status => state.pizzaSlice.status;

export { getPizzaItems, getPizzaStatus };