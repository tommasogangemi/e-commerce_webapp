import React from 'react';
//redux
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart-actions';
//style
import {
	CollectionItemContainer,
	BackgroundImage,
	AddItemButton,
	CollectionFooterContainer,
	NameContainer,
	PriceContainer,
} from './collection-item-styles.js';

const CollectionItem = ({ item, addItem }) => {
	const { name, imageUrl, price } = item;
	return (
		<CollectionItemContainer>
			<BackgroundImage
				className='image'
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<CollectionFooterContainer>
				<NameContainer>{name}</NameContainer>
				<PriceContainer>{price}</PriceContainer>
			</CollectionFooterContainer>
			<AddItemButton onClick={() => addItem(item)} inverted>
				Add to cart
			</AddItemButton>
		</CollectionItemContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
