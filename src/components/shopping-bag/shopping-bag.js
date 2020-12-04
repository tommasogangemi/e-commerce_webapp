import React from 'react';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { showCartDropdown } from '../../redux/cart/cart-actions';
import { CartIconContainer } from './shopping-bag-styles';

const ShoppingBag = ({ showCartDropdown, itemCount }) => (
	<CartIconContainer onClick={showCartDropdown}>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'>{itemCount}</span>
	</CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
});

const mapDispatchToProps = dispatch => ({
	showCartDropdown: () => dispatch(showCartDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBag);
