import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../layout";
import { Link } from "react-router-dom";

const Order = () => {
  const orders = useSelector((state) => state.orders.orders);
  const user = useSelector((state) => state.user.user);
  const filtered_orders = orders.filter((order) => order.user_id === user.id);
  return (
    <Layout>
      <div>
        {filtered_orders.map((order) => {
          return (
            <div key={order.id}>
              <Link to={`/orders/${order.id}`}>Order NO # {order.id}</Link>
              {order.items.map((item) => (
                <div key={`${order.id}-${item.id}-${order.id}`}>
                  name: {item.name}, quantity: {item.quantity}, price:{" "}
                  {item.price}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Order;
