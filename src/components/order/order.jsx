import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../layout'
import { Link } from 'react-router-dom'

const Order = () => {
  const orders = useSelector(state=>state.orders.orders)
  return (
    <Layout>
      <div>
        {orders.map(order => {
          return (
            <div key={order.id}>
              <Link to={`/orders/${order.id}`}>Order NO # {order.id}</Link>
              {order.items.map(item => (
                <div key={`${order.id}-${item.id}-${order.id}`}>
                  name: {item.name}, quantity: {item.quantity}, price: {item.price}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </Layout>
  )
}

export default Order
