/** @jsxImportSource react */

import { addItemToCart } from '../stores/cart';

export const AddToCart = ({ item }: { item: ShopItem }) => {
	console.log(item);
	return (
		<button className="big-link" onClick={() => addItemToCart(item)}>
			Add to Cart
		</button>
	);
};
