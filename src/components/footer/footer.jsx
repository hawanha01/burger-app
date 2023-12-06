import React from 'react'
import './footer.css'
import Menu from './Menu/menu'
import { useDispatch, useSelector } from 'react-redux'
import { resetState } from '../../state/item/itemSlice'

const Footer = () => {
  const dispatch = useDispatch()
  const totalPrice = useSelector(state => state.totalPrice.totalPrice)
  return (
    <div className="Footer">
      <div className="PriceTag">
        <p>Current Price:{totalPrice}</p>
      </div>
      <div className="MenuTag">
        <Menu/>
      </div>
      <div className="SignUp">
        <button onClick={() => dispatch(resetState())}>Place Order</button>
      </div>
    </div>
  )
}

export default Footer
