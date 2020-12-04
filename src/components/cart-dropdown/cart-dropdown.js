import React from 'react';
import CartItem from '../cart-item/cart-item';
import { connect } from 'react-redux';
import { showCartDropdown } from '../../redux/cart/cart-actions';
import {
	DropdownContainer,
	EmptyMessage,
	CartItemsContainer,
	ButtonContainer,
} from './cart-dropdown-styles.js';
import { withRouter } from 'react-router';
//reselect
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart-selectors';

const CartDropdown = ({ cartItems, history, dispatch }) => (
	<DropdownContainer>
		<CartItemsContainer>
			{cartItems.length ? (
				cartItems.map(cartItem => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
			) : (
				<EmptyMessage>Your cart is empty</EmptyMessage>
			)}
		</CartItemsContainer>
		<ButtonContainer
			onClick={() => {
				history.push('/checkout');
				dispatch(showCartDropdown());
			}}
		>
			GO TO CHECKOUT
		</ButtonContainer>
	</DropdownContainer>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
