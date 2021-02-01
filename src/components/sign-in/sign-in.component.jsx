import React from 'react';

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.componet'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log('in handleSubmit of sign-in')
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
            console.log('signed In I think')
        } catch (error) {
            console.error(error);
        }
        
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        console.log(name, value);
        this.setState({[name]: value});
    }

    render () {
        return (
            <div className='sign-in'>
                <h2>I all ready have an account</h2>
                <span>Sign in with your email and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name='email' label='email' value={this.state.email} required handleChange={this.handleChange}/>
                    <FormInput type="password" name='password' label='Password' value={this.state.password} required handleChange={this.handleChange}/>
                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}


export default SignIn;