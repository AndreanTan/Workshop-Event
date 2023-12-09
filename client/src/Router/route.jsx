// import App from "../App";
import { Route } from "react-router-dom";
import Auth from "../Pages/auth";
import { CartComponent } from "../Pages/Cart";
import HomeComponent from "../Pages/Home";
import Workshop from "../Pages/Workshop";


const route = [
  <Route key={"/"} path="/" element={<HomeComponent />} />,
  <Route key={"/workshop"} path="/workshop" element={<Workshop />} />,
  <Route key={"/cart"} path="/cart" element={<CartComponent />} />,
  <Route key={"/login"} path="/login" element={<Auth isLogin={false} />} />,
];

export default route;
