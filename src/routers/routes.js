import { createBrowserRouter } from "react-router-dom";
import App from '../App.js'
import Order from "../components/order/order.jsx";
import OrderDetail from "../components/order/orderDetail/orderDetail.jsx";

const router = createBrowserRouter([
  {
    path:"/",
    element:(
      <App/>
    )
  },
  {
    path:"orders",
    element:(
      <Order/>
    )
  },
  {
    path: "orders/:orderId",
    element:(
      <OrderDetail/>
    )
  }
])

export default router