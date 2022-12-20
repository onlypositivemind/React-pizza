import { BasketItem } from 'redux/basket/types';

const calcTotalQty = (arr: BasketItem[]): number => arr.reduce(
	(acc, obj) => obj.count !== undefined ? acc + obj.count : acc
	, 0);

export default calcTotalQty;