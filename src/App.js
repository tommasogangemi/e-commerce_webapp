//funtionality
import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
//components
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import CheckoutPage from './pages/checkout/checkout';
import SigninAndSignup from './pages/signin-and-signup/signin-and-signup';
import Header from './components/header/header';
//redux
import { connect } from 'react-redux';
//styles
import './App.css';
//reselect
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user-selectors';
import { checkUserSession } from './redux/user/user-actions';

const App = ({ currentUser, checkUserSession }) => {
	// componentDidMount() {
	// 	const { checkUserSession } = this.props;
	// 	checkUserSession();
	// }

	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route path='/shop' component={ShopPage} />
				<Route exact path='/checkout' component={CheckoutPage} />
				<Route
					exact
					path='/signin'
					render={() =>
						currentUser ? <Redirect to='/' /> : <SigninAndSignup />
					}
				/>
			</Switch>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
