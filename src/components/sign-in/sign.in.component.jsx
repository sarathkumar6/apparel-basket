import React from 'react';
import './sign.in.component.styles.scss';

import FormInput from '../form-input/form.input.component';
import AppBasketButton from '../apparel-basket-button/apparel.basket.button.component'

class SignIn extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            email: '',
            password: ''
        }
    }
onSubmitHandler = event => {
    console.log('On submit event', event);
    event.preventDefault();
    this.setState({email: '', password: ''})
}

onChangeHandler = event => {
    const {value, name} = event.target;
    this.setState({[name]: value});
}
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.onSubmitHandler}>
                    <FormInput  name="email"
                            type="email"
                            label="Email"
                            value={this.state.email}
                            changeHandler={this.onChangeHandler}>
                    </FormInput>
                    <FormInput  name="password"
                            type="password"
                            label="Password"
                            value={this.state.password}
                            changeHandler={this.onChangeHandler}>
                    </FormInput>

                    <AppBasketButton type="submit">
                        Sign In
                    </AppBasketButton>
                </form>
            </div>
        );
    }
}

export default SignIn;