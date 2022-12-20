export type BasketItem = {
	id: string;
	name: string;
	price: number;
	imageUrl: string;
	type: string;
	size: number;
	count?: number;
}

export interface IBasketSlice {
	items: BasketItem[];
	totalPrice: number;
	totalQty: number;
}