import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/shop/shop';
import './App.css';

function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route path='/shop/' component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
