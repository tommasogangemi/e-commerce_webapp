import React, { useState } from 'react';
//components
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
//other
import { connect } from 'react-redux';
import { userSignupStart } from '../../redux/user/user-actions';
import './signup.scss';

const Signup = ({ userSignupStart }) => {
	const [userCredentials, setCredentials] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const { displayName, email, password, confirmPassword } = userCredentials;

	const handleSubmit = async event => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert(`Passwords don't match`);
			return;
		}

		userSignupStart(displayName, email, password);
	};

	const handleChange = event => {
		const { name, value } = event.target;
		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className='sign-up'>
			<h2 className='title'>I do not have an account</h2>
			<span>Sign up with your email and password</span>
			<form className='sign-up-form' onSubmit={handleSubmit}>
				<FormInput
					type='text'
					name='displayName'
					value={displayName}
					onChange={handleChange}
					label='Display Name'
					required
				/>

				<FormInput
					type='email'
					name='email'
					value={email}
					onChange={handleChange}
					label='Email'
					required
				/>

				<FormInput
					type='password'
					name='password'
					value={password}
					onChange={handleChange}
					label='Password'
					required
				/>

				<FormInput
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					onChange={handleChange}
					label='Confirm Password'
					required
				/>

				<CustomButton type='submit'>Sign Up</CustomButton>
			</form>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	userSignupStart: (displayName, email, password) =>
		dispatch(userSignupStart({ displayName, email, password })),
});

export default connect(null, mapDispatchToProps)(Signup);
