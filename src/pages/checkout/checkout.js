import React from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
	selectCartItems,
	selectCartTotal,
} from '../../redux/cart/cart-selectors';

import {
	CheckoutPageContainer,
	CheckoutHeaderContainer,
	TotalContainer,
	WarningContainer,
} from './checkout-styles';

const CheckoutPage = ({ cartItems, total }) => (
	<CheckoutPageContainer>
		<CheckoutHeaderContainer>
			<div>
				<span>Product</span>
			</div>
			<div>
				<span>Description</span>
			</div>
			<div>
				<span>Quantity</span>
			</div>
			<div>
				<span>Price</span>
			</div>
			<div>
				<span>Remove</span>
			</div>
		</CheckoutHeaderContainer>
		{cartItems.map(cartItem => (
			<CheckoutItem key={cartItem.id} cartItem={cartItem} />
		))}
		<TotalContainer>
			<span>TOTAL: {total}</span>
		</TotalContainer>
		<WarningContainer>
			Pleae use the following test credit card for payments
			<br />
			4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
		</WarningContainer>
		<StripeCheckoutButton price={total} />
	</CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
