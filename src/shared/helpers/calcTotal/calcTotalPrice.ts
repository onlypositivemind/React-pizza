import { BasketItem } from 'redux/basket/types';

const calcTotalPrice = (arr: BasketItem[]): number => arr.reduce(
	(acc, obj) => obj.count !== undefined ? acc + obj.price * obj.count : acc
	, 0);

export default calcTotalPrice;
