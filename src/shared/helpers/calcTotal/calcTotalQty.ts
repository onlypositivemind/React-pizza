import { BasketItem } from '../../../redux/slices/basketSlice';

const calcTotalQty = (arr: BasketItem[]): number => arr.reduce((acc, obj) => acc + obj.count, 0);

export default calcTotalQty;