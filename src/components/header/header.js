import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
//components
import ShoppingBag from '../shopping-bag/shopping-bag';
import CartDropdown from '../cart-dropdown/cart-dropdown';
//redux
import { connect } from 'react-redux';
//other
import { auth } from '../../firebase/firebase.utils';
import './header.scss';
//reselect
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import { selectCartHidden } from '../../redux/cart/cart-selectors';

const Header = ({ currentUser, hidden }) => (
	<div className='header'>
		<Link className='logo-container' to='/'>
			<Logo className='logo' />
		</Link>
		<div className='options'>
			<Link className='option' to='/shop'>
				SHOP
			</Link>
			<Link className='option' to='/shop'>
				CONTACTS
			</Link>
			{!currentUser ? (
				<Link className='option' to='/signin'>
					SIGN IN
				</Link>
			) : (
				<div className='option' onClick={() => auth.signOut()}>
					SIGN OUT
				</div>
			)}
			<ShoppingBag />
		</div>
		{hidden ? null : <CartDropdown />}
	</div>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
