import { createBrowserRouter } from "react-router-dom";
import App from "../App.js";
import Order from "../pages/order/index.jsx";
import OrderDetail from "../pages/order/orderDetail/index.jsx";
import Login from "../pages/login/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "orders",
    element: <Order />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "orders/:orderId",
    element: <OrderDetail />,
  },
]);

export default router;
