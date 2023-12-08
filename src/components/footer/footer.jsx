import React from 'react'
import './footer.css'
import Menu from './Menu/menu'
import { useDispatch, useSelector } from 'react-redux'
import { resetState } from '../../actions/itemActions'
import { updateOrders } from '../../actions/orderActions'

const Footer = () => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.items.items)
  const totalPrice = useSelector(state => state.totalPrice.totalPrice)
  const handleOrders = () => {
    dispatch(updateOrders(items))
    dispatch(resetState())
  }
  return (
    <div className='Footer'>
      <div className='PriceTag'>
        <p>Current Price:{totalPrice}</p>
      </div>
      <div className='MenuTag'>
        <Menu/>
      </div>
      <div className='SignUp'>
        <button onClick={() => handleOrders()}>Place Order</button>
      </div>
    </div>
  )
}

export default Footer
