import React from 'react';
import './header.component.styles.scss'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg'
import HomePage from '../../pages/homepage/homepage.component';
import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import  CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link to="/">
            <Logo className='logo'>
            </Logo>
        </Link>
        <div className='options'>

            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='options'
                     onClick={()=> auth.signOut()}>
                     SIGN OUT
                </div>
                :
                <Link className='options' to='/signin'>
                    SIGN IN
                </Link>
            }
            <CartIcon></CartIcon>
        </div>
        {
            hidden ? null: <CartDropDown></CartDropDown>
        }
        </div>
)

const mapStateToProps = ({user:{currentUser}, cart: {hidden}}) => {
    return {
        currentUser,
        hidden
    }
}
export default connect(mapStateToProps)(Header);