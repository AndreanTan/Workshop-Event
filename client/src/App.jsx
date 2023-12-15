import { Routes } from "react-router";
import "./App.css";
import route from "./Router/Route";
// import LoginForm from "./Components/LoginForm";
// import Auth from "./Pages/auth";
import { useLocation } from "react-router-dom";
import NavigationBar from "./Components/Navbar";
function App() {
  const { pathname } = useLocation();
  const excludedPathsNavbar = ["/login", "/regist"];

  const isExcludedNavbar = excludedPathsNavbar.some((path) =>
    pathname.startsWith(path)
  );
  return (
    <>
      <div className="">
        {isExcludedNavbar ? null : <NavigationBar />}
        <Routes>{route.map((value) => value)}</Routes>
      </div>
    </>
  );
}

export default App;
