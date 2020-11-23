import React from 'react';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { showCartDropdown } from '../../redux/cart/cart-actions';
import './shopping-bag.scss';

const ShoppingBag = ({ showCartDropdown, itemCount }) => (
	<div onClick={showCartDropdown} className='cart-icon'>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'>{itemCount}</span>
	</div>
);

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
});

const mapDispatchToProps = dispatch => ({
	showCartDropdown: () => dispatch(showCartDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBag);
