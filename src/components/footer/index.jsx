import React from 'react'
import './footer.css'
import Menu from './Menu'
import { useDispatch, useSelector } from 'react-redux'
import { resetState } from '../../actions/itemActions'
import { updateOrders } from '../../actions/orderActions'

const Footer = () => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.items.items)
  const totalPrice = useSelector(state => state.totalPrice.totalPrice)
  const user = useSelector(state => state.user.user)
  const handleOrders = () => {
    dispatch(updateOrders({items,user}))
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
        <button disabled={Object.keys(user).length === 0 ? true : false} onClick={() => handleOrders()}>Place Order</button>
      </div>
    </div>
  )
}

export default Footer
