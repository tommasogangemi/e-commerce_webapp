//funtionality
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
//components
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/shop/shop';
import CheckoutPage from './pages/checkout/checkout';
import SigninAndSignup from './pages/signin-and-signup/signin-and-signup';
import Header from './components/header/header';
//redux
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';
//firebase
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
//styles
import './App.css';
//reselect
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user-selectors';

class App extends Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {
					setCurrentUser({
						currentUser: {
							id: snapShot.id,
							...snapShot.data(),
						},
					});
				});
			} else {
				setCurrentUser(userAuth);
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route path='/shop/' component={ShopPage} />
					<Route exact path='/checkout' component={CheckoutPage} />
					<Route
						exact
						path='/signin'
						render={() =>
							this.props.currentUser ? <Redirect to='/' /> : <SigninAndSignup />
						}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
