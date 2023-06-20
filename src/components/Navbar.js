import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"

const Navbar = ({size}) => {
  

  return (
    <>
    
    <div>
      <nav>
        <div className='navbox'>
            <span className='myshop'>
                SoftQue Laptops
            </span>
            <div className='cart'>
                <span>
                    <Link to="/cart"><i className='fas fa-cart-plus'></i>Cart</Link>
                </span>
                <span>{size}</span>
            </div>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Navbar
