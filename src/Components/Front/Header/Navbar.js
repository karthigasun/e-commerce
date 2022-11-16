import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom'
import {FaBars,FaTimes,FaShoppingCart} from 'react-icons/fa';
import { useState } from 'react';
// import {useSelector} from 'react-redux'

function Navbar() {
    const[icon,setIcon]=useState(false);
    const iconHandler=()=>{
        setIcon(!icon)
    }
    const closeSide=()=>{
        setIcon(false);
    }
    // const {totalcount}=useSelector((state)=>state.cart)
  return (
    <>
        <div className='section'>
            <div className='container'>
                <nav className='navbar'>
                        <h1>
                            <Link to='/' className='navbar-brand logo' onClick={closeSide}>Shopping</Link>
                        </h1>
                        
                        <div className='na-icon' onClick={iconHandler}>
                             {
                            icon?<FaTimes className='time-icon'></FaTimes>:
                            <FaBars className='bar-icon'></FaBars>
                            }
                        </div>
                        
                        <ul className={
                            icon? "navi-menu active" : "navi-menu"
                             }>
                                <li className='nav-item'>
                                    <Link to='/' className='nav-link' onClick={closeSide}>Home</Link>
                                </li>           
                                <li className='nav-item'>
                                    <Link to='/mobile' className='nav-link' onClick={closeSide}>Laptop</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/lap' className='nav-link' onClick={closeSide}>Mobiles</Link>
                                </li>           
                                <li className='nav-item'>
                                    <Link to='/tv' className='nav-link' onClick={closeSide}>TV</Link>
                                </li>           
                        </ul>  

                        <div className='cart-icon me-5'>
                            <Link to='/cart'><FaShoppingCart className='fa-cart'></FaShoppingCart></Link>
                        </div>                      
                </nav>
                
            </div>
        </div>
    </>
  )
}

export default Navbar