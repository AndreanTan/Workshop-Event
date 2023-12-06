// import App from "../App";
import { Route } from "react-router-dom";
import Auth from "../Pages/auth";
import { CartComponent } from "../Pages/Cart";

const route = [
  <Route key={"/cart"} path="/cart" element={<CartComponent />} />,
  <Route key={"/login"} path="/login" element={<Auth isLogin={false} />} />,
];

export default route;
