import React, {useState } from 'react';
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { googleSignInStart, emailSignInStart } from '../../redux/user/users.actions';

import './sign-in.styles.scss'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({email: '', password: ''});
    const {email, password} = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();
        emailSignInStart(email, password);        
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log(name, value);
        setCredentials({...userCredentials, [name]: value});
    }

    return (
        <div className='sign-in'>
            <h2>I all ready have an account</h2>
            <span>Sign in with your email and password.</span>
            <form onSubmit={handleSubmit}>
                <FormInput type="email" name='email' label='email' value={email} required handleChange={handleChange}/>
                <FormInput type="password" name='password' label='Password' value={password} required handleChange={handleChange}/>
                <div className='buttons'>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
    
});

export default connect(null, mapDispatchToProps)(SignIn);