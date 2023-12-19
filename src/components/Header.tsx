import React from 'react'
import TopCart from './Cart/TopCart'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    


        <header className="row">
          

          <div className="col-6 ">
            <Link to="/">
            <div className="logo">
              <span className='logo-bg'></span><span className='logo-letter'>PW</span>Pizza Website
            </div>
            </Link>
          </div>

    
          <div className="col-6 top-cart">
            <TopCart/>
          </div>
            
        </header>

  )
}

export default Header