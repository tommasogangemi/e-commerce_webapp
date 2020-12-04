import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item';
import {
	CollectionPreviewContainer,
	PreviewContainer,
} from './collection-preview-styles.js';

const CollectionPreview = ({ title, items, routeName, history, match }) => {
	return (
		<CollectionPreviewContainer>
			<span>
				<h1
					className='title'
					onClick={() => history.push(`${match.url}/${routeName}`)}
				>
					{title.toUpperCase()}
				</h1>
			</span>
			<PreviewContainer>
				{items
					.filter((item, index) => index < 4)
					.map(item => (
						<CollectionItem key={item.id} item={item} />
					))}
			</PreviewContainer>
		</CollectionPreviewContainer>
	);
};

export default withRouter(CollectionPreview);
