import { BasketItem } from '../../../redux/slices/basketSlice';

const calcTotalPrice = (arr: BasketItem[]): number => arr.reduce((acc, obj) => acc + obj.price * obj.count, 0);

export default calcTotalPrice;
