import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
	googleSigninStart,
	emailSigninStart,
} from '../../redux/user/user-actions';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
//firebase
import './signin.scss';

const Signin = ({ emailSigninStart, googleSigninStart }) => {
	const [userCredentials, setCredentials] = useState({
		email: '',
		password: '',
	});

	const { email, password } = userCredentials;

	const handleSubmit = async event => {
		event.preventDefault();

		emailSigninStart(email, password);
	};

	const handleChange = event => {
		const { name, value } = event.target;
		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className='sign-in'>
			<h2>I already have an account</h2>
			<span>Sign in with tour e-mail and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name='email'
					type='email'
					value={email}
					label='email'
					required
					handleChange={handleChange}
				/>

				<FormInput
					name='password'
					type='password'
					value={password}
					label='password'
					required
					handleChange={handleChange}
				/>
				<div className='buttons'>
					<CustomButton type='submit'>Submit</CustomButton>
					<CustomButton
						onClick={googleSigninStart}
						type='button'
						isGoogleSignin
					>
						Sign in with Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	googleSigninStart: () => dispatch(googleSigninStart()),
	emailSigninStart: (email, password) =>
		dispatch(emailSigninStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(Signin);
