import React, { useEffect } from 'react'
import './menu.css'
import MenuItem from './menu_item'

const Menu = ({ handlePrice, bunPrice, items, increase, decrease }) => {
  useEffect(() => {
    const calculateTotalPrice = () => items.reduce((sum, item) => (sum + item.quantity * item.price), bunPrice)
    handlePrice(calculateTotalPrice())
  }, [items])

  return (
    <div className="Menu">
      {items.map((item) => <MenuItem key={item.id} item={item} increase = {() => increase(item)} decrease={() => decrease(item)} />)}
    </div>
  )
}

export default Menu
