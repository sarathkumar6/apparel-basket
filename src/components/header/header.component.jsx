import React from 'react';
import './header.component.styles.scss'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg'
import HomePage from '../../pages/homepage/homepage.component';
const Header = () => (
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
        </div>
    </div>
)
export default Header;