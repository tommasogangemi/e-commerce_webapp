import React from 'react';
import Signin from '../../components/signin/signin';
import Signup from '../../components/signup/signup';
import './signin-and-signup.scss';

const SigninAndSignup = () => (
	<div className='sign-in-and-sign-up'>
		<Signin />
		<Signup />
	</div>
);

export default SigninAndSignup;
