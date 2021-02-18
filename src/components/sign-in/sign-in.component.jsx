import React from 'react';
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { googleSignInStart, emailSignInStart } from '../../redux/user/users.actions';

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
        const { emailSignInStart } = this.props;
        const {email, password} = this.state;
        emailSignInStart(email, password);        
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        console.log(name, value);
        this.setState({[name]: value});
    }

    render () {
        const { googleSignInStart, emailSignInStart } = this.props;
        return (
            <div className='sign-in'>
                <h2>I all ready have an account</h2>
                <span>Sign in with your email and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name='email' label='email' value={this.state.email} required handleChange={this.handleChange}/>
                    <FormInput type="password" name='password' label='Password' value={this.state.password} required handleChange={this.handleChange}/>
                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
    
});

export default connect(null, mapDispatchToProps)(SignIn);