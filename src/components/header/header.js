import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
//components
import ShoppingBag from '../shopping-bag/shopping-bag';
import CartDropdown from '../cart-dropdown/cart-dropdown';
//redux
import { connect } from 'react-redux';
import { signoutStart } from '../../redux/user/user-actions';
//other
import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink,
} from './header-styles';
//reselect
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import { selectCartHidden } from '../../redux/cart/cart-selectors';

const Header = ({ currentUser, hidden, signoutStart }) => (
	<HeaderContainer>
		<LogoContainer to='/'>
			<Logo />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to='/shop'>SHOP</OptionLink>
			<OptionLink to='/shop'>CONTACTS</OptionLink>
			{!currentUser ? (
				<OptionLink to='/signin'>SIGN IN</OptionLink>
			) : (
				<OptionLink as='div' onClick={signoutStart}>
					SIGN OUT
				</OptionLink>
			)}
			<ShoppingBag />
		</OptionsContainer>
		{hidden ? null : <CartDropdown />}
	</HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
	signoutStart: () => dispatch(signoutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
