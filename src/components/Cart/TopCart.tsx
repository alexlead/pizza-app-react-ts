import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const TopCart = () => {
  return (
    <div className='cart-button'>
      <span className='cart-button__icon'><FontAwesomeIcon icon={faCartShopping} /></span>
      <span className='cart-button__text'>Cart: </span>
      <span className='cart-button__product_qty'>0</span>
      <span className='cart-button__product_sum'>EUR 0.00</span>
      </div>
  )
}

export default TopCart