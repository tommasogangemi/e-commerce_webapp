import React from 'react';
import { withRouter } from 'react-router-dom';
import {
	MenuItemContainer,
	BackgroundImage,
	ContentContainer,
} from './menu-item-styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
	return (
		<MenuItemContainer
			size={size}
			onClick={() => history.push(`${match.url}${linkUrl}`)}
		>
			<BackgroundImage className='background-image' imageUrl={imageUrl} />
			<ContentContainer className='content'>
				<h1>{title.toUpperCase()}</h1>
				<span> SHOP NOW</span>
			</ContentContainer>
		</MenuItemContainer>
	);
};

export default withRouter(MenuItem);
