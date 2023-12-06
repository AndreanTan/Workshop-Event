import { Routes } from "react-router";
import "./App.css";
import route from "./Router/Route";
// import LoginForm from "./Components/LoginForm";
// import Auth from "./Pages/auth";
function App() {
  return (
    <>
      <div className="">
        <Routes>
          {/* <h1 className="font-Inter">Hello World!</h1> */}
          {/* <Auth>
          <LoginForm />
        </Auth> */}
          {/* <h1 className="font-Inter">Hello World!</h1>
          <a href="/cart">CART</a> */}
          {route.map((value) => value)}
        </Routes>
      </div>
    </>
  );
}

export default App;
