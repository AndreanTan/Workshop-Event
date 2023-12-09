// import App from "../App";
import { Route } from "react-router-dom";
import Auth from "../Pages/auth";
import { CartComponent } from "../Pages/Cart";
import HomeComponent from "../Pages/Home";
import Workshop from "../Pages/Workshop";
import WorkshopCard from "../Components/WorkshopCard";
import DescriptionWorkshop from "../Pages/DescriptionWorkshop";




const route = [
  <Route key={"/"} path="/" element={<HomeComponent />} />,
  <Route key={"/workshop"} path="/workshop" element={<Workshop />} />,
  <Route key={"/cart"} path="/cart" element={<CartComponent />} />,
  <Route key={"/card"} path="/card" element={<WorkshopCard />} />,
  <Route key={"/descworkshop"} path="/descworkshop" element={<DescriptionWorkshop />} />,
  <Route key={"/login"} path="/login" element={<Auth isLogin={false} />} />,
];

export default route;
