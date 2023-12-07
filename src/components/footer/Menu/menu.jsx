import React from 'react'
import './menu.css'
import MenuItem from './menu_item'
import { useSelector } from 'react-redux'

const Menu = () => {
  const items = useSelector(state => state.items.items)
  return (
    <div className='Menu'>
      {items.map((item) => <MenuItem key={item.id} item={item} />)}
    </div>
  )
}

export default Menu
