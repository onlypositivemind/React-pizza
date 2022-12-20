import { BasketItem } from '../../../redux/slices/basketSlice';

const calcTotalQty = (arr: BasketItem[]): number => arr.reduce(
	(acc, obj) => obj.count !== undefined ? acc + obj.count : 0
	, 0);

export default calcTotalQty;