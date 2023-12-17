// import App from "../App";
import { Route } from "react-router-dom";

import CartComponent  from "../Pages/Cart";
import HomeComponent from "../Pages/Home";
import Workshop from "../Pages/Workshop";
import WorkshopCard from "../Components/WorkshopCard";
import DescriptionWorkshop from "../Pages/DescriptionWorkshop";
import AuthLogin from "../Pages/Auth/AuthLogin";
import AuthRegist from "../Pages/Auth/AuthRegist";
import Checkout from "../Pages/Checkout";
import AuthVerif from "../Pages/Auth/AuthVerif";


const route = [
  <Route key={"/"} path="/" element={<HomeComponent />} />,
  <Route key={"/workshop"} path="/workshop" element={<Workshop />} />,
  <Route key={"/cart"} path="/cart" element={<CartComponent />} />,
  <Route key={"/card"} path="/card" element={<WorkshopCard />} />,
  <Route
    key={"/descworkshop/:id"}
    path="/descworkshop/:id"
    element={<DescriptionWorkshop />}
  />,
  <Route key={"/login"} path="/login" element={<AuthLogin />} />,
  <Route key={"/regist"} path="/regist" element={<AuthRegist />} />,
  <Route key={"/checkout"} path="/checkout" element={<Checkout />} />,
  <Route
    key={"/verify/:token"}
    path="/verify/:token"
    element={<AuthVerif />}
  />,
];

export default route;
