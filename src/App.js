//functionality
import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
//components
import Header from './components/header/header';
import Spinner from './components/spinner/spinner';
import ErrorBoundary from './components/error-boundary/error-boundary';
//redux
import { connect } from 'react-redux';
//styles
import './App.css';
//reselect
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user-selectors';
import { checkUserSession } from './redux/user/user-actions';

const Homepage = lazy(() => import('./pages/homepage/homepage'));
const ShopPage = lazy(() => import('./pages/shop/shop'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout'));
const SigninAndSignup = lazy(() =>
	import('./pages/signin-and-signup/signin-and-signup')
);

const App = ({ currentUser, checkUserSession }) => {
	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	return (
		<div>
			<Header />
			<Switch>
				<ErrorBoundary>
					<Suspense fallback={<Spinner />}>
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
					</Suspense>
				</ErrorBoundary>
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
