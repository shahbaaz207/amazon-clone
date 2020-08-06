import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StateProvider'
import { auth } from '../firebase'

const Header = () => {
        const [{basket,user}]=useStateValue()
        console.log(basket)

        const login=()=>{
            auth.signOut()
        }
    return (
        <nav className='header'>
            <Link to='/'>
                <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                alt='amazone'
                className="header__logo"/>
            </Link>

            <div className='header__search'>
               <input type='text' className='header__searchInput'/>
               <SearchIcon className="header__searchIcon"/> 
            </div>   

            <div className='header__nav'>
                <Link to={!user&&'/login'} className='header__link'>
                    <div className='header__option' onClick={login}>
                        <span className='header__optionLineOne'>{user?.email}</span>
                        <span className='header__optionLineTwo'>{user?"Logout":"Sign In"}</span>
                    </div>
                </Link>

                <Link to='/' className='header__link'>
                    <div className='header__option' onClick={login}>
                        <span className='header__optionLineOne'>Return</span>
                        <span className='header__optionLineTwo'>Order</span>
                    </div>
                </Link>

                <Link to='/' className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Your</span>
                        <span className='header__optionLineTwo'>Prime</span>
                    </div>
                </Link>
            </div>

            <Link to='/checkout' className='header__link'>
                <div className='header__optionBasket'>
                    <ShoppingBasketIcon className=''/>
                    <span className='header__optionLineTwo basket__count'>{basket?.length}</span>
                </div>
            </Link>
        </nav>
    )
}

export default Header
