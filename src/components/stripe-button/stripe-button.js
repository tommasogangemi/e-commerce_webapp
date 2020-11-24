import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './stripe-button.scss';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51Hr3ftGvoxbWxn87YiyaVdzm9J5TxerU4lPCzHKmulz56m430ieex8Aydof7HgMw77ORVxTlvdIzmdfGSyz7jgTX00WkvjfEFF';

	const onToken = token => {
		console.log(token);
		alert('Payment Succesful!');
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is ${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
