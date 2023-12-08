// import App from "../App";
import { Route } from "react-router-dom";
import Auth from "../Pages/auth";
import { CartComponent } from "../Pages/Cart";
import HomeComponent from "../Pages/Home";

const route = [
  <Route key={"/"} path="/" element={<HomeComponent />} />,
  <Route key={"/cart"} path="/cart" element={<CartComponent />} />,
  <Route key={"/login"} path="/login" element={<Auth isLogin={false} />} />,
];

export default route;
