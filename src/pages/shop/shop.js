import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
//components
import Spinner from '../../components/spinner/spinner';
import ErrorBoundary from '../../components/error-boundary/error-boundary';
//other
import { fetchCollectionsStart } from '../../redux/shop/shop-actions';

const CollectionsOverviewContainer = lazy(() =>
	import('../../components/collections-overview/collections-overview-container')
);
const CollectionContainer = lazy(() =>
	import('../collections/collection-container')
);

const ShopPage = ({ fetchCollectionsStart, match }) => {
	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart]);

	return (
		<div className='shop-page'>
			<ErrorBoundary>
				<Suspense fallback={<Spinner />}>
					<Route
						exact
						path={`${match.path}`}
						component={CollectionsOverviewContainer}
					/>
					<Route
						path={`${match.path}/:collectionParams`}
						component={CollectionContainer}
					/>
				</Suspense>
			</ErrorBoundary>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
