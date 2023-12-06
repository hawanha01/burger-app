import React, { useEffect } from 'react'
import './menu.css'
import { useDispatch, useSelector } from 'react-redux'
import { DecrementIngredient, IncrementIngredient } from '../../../state/item/itemSlice'
import { updateTotalPrice } from '../../../state/price/priceSlice'

const MenuItem = ({ item }) => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.items.items)
  useEffect(() => {
    dispatch(updateTotalPrice({ items }))
  })
  return (
    <div className="MenuItem">
      <div><strong>{item.name}</strong></div>
      <div><button onClick={() => dispatch(DecrementIngredient(item))}>Less</button></div>
      <div><button onClick={() => dispatch(IncrementIngredient(item))}>More</button></div>
    </div>
  )
}
export default MenuItem
