import React from 'react'
import TopCart from './Cart/TopCart'

const Header = () => {
  return (
    


        <header className="row">
          

          <div className="col-6 ">
            <div className="logo">
              <span className='logo-bg'></span><span className='logo-letter'>P</span>Pizza Website
            </div>
          </div>

    
          <div className="col-6 top-cart">
            <TopCart/>
          </div>
            
        </header>

  )
}

export default Header