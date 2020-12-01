import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item';
import './collection-preview.scss';

const CollectionPreview = ({ title, items, routeName, history, match }) => {
	return (
		<div className='collection-preview'>
			<span>
				<h1
					className='title'
					onClick={() => history.push(`${match.url}/${routeName}`)}
				>
					{title.toUpperCase()}
				</h1>
			</span>
			<div className='preview'>
				{items
					.filter((item, index) => index < 4)
					.map(item => (
						<CollectionItem key={item.id} item={item} />
					))}
			</div>
		</div>
	);
};

export default withRouter(CollectionPreview);
