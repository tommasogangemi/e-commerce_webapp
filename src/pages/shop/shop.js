import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collections/collection';

const ShopPage = ({ match }) => {
	return (
		<div className='shop-page'>
			<Route exact path={`${match.path}`} component={CollectionsOverview} />
			<Route
				path={`${match.path}/:collectionRouteName`}
				component={CollectionPage}
			/>
		</div>
	);
};

export default ShopPage;
