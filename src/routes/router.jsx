import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { cartComponent } from "../Pages/cart";

export default createBrowserRouter([
  {
    path: "/cart",
    element: cartComponent(),
  },
  {
    path: "/",
    element: <App />,
  },
]);
