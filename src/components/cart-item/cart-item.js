import React from 'react';
import {
	CartItemContainer,
	ImageContainer,
	ItemDetailsContainer,
} from './cart-item-styles.js';

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
	<CartItemContainer>
		<ImageContainer src={imageUrl} alt='item' />
		<ItemDetailsContainer>
			<span>{name}</span>
			<span>
				{quantity} x ${price}
			</span>
		</ItemDetailsContainer>
	</CartItemContainer>
);

export default React.memo(CartItem);
