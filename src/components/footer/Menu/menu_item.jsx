import React from 'react'
import './menu.css'

const MenuItem = ({ item, increase, decrease }) => {
  return (
    <div className="MenuItem">
      <div><strong>{item.name}</strong></div>
      <div><button onClick={decrease}>Less</button></div>
      <div><button onClick={increase}>More</button></div>
    </div>
  )
}
export default MenuItem
