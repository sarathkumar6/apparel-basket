/* eslint-disable no-undef */
import React from 'react';

import FormInput from '../form-input/form.input.component';
import AppBasketButton from '../apparel-basket-button/apparel.basket.button.component'

import { auth, createUserProfileDoc} from '../../firebase/firebase.utils'
import './sign.up.component.styles.scss';
// eslint-disable-next-line no-unused-vars
import _ from 'lodash';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    onSubmitHandler = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (!_.isEqual(password, confirmPassword)) {
            alert('Sorry, passowrds do not match. Please check your password');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDoc(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }
        catch (error) {
            console.log('Error signing up', error.message);
        }
    }

    onChangeHandler = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    render(){
        return(
            <div className="sign-up">
                <h2 className="title"> I do not have an account</h2>
                <span>Sign up with email and password</span>
                <form className="sign-up-form" onSubmit={this.onSubmitHandler}>
                    <FormInput type='text'
                                name='displayName'
                                value={this.state.displayName}
                                onChange={this.onChangeHandler}
                                label="Display Name"
                                required>
                    </FormInput>

                    <FormInput type='email'
                                name='email'
                                value={this.state.email}
                                onChange={this.onChangeHandler}
                                label="Email"
                                required>
                    </FormInput>

                    <FormInput type='password'
                                name='password'
                                value={this.state.password}
                                onChange={this.onChangeHandler}
                                label="Password"
                                required>
                    </FormInput>

                    <FormInput type='password'
                                name='confirmPassword'
                                value={this.state.confirmPassword}
                                onChange={this.onChangeHandler}
                                label="Confirm Password"
                                required>
                    </FormInput>
                    <AppBasketButton type='submit'>
                        Sign Up
                    </AppBasketButton>
                </form>
            </div>
        )
    }
}

export default SignUp
