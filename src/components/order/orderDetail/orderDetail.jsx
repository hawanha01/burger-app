import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../../layout'
import { Link, useParams } from 'react-router-dom'

const OrderDetail = () => {
  const orders = useSelector(state => state.orders.orders)
  const {orderId} = useParams()
  const currentOrder = orders.find(order => order.id === parseInt(orderId))
  return (
    <Layout>
      <h2>Order details for order id: {orderId}</h2>
      {currentOrder.items.map(order=>(
        <div key={order.id}>Name: {order.name},quantity: {order.quantity}, price: {order.price}</div>
      ))}
      <Link to='/orders'>Back to orders</Link>
    </Layout>
  )
}

export default OrderDetail
