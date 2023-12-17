import { Routes, Route } from "react-router";
import "./App.css";
import route from "./Router/Route";
// import LoginForm from "./Components/LoginForm";
// import Auth from "./Pages/auth";
import { useLocation } from "react-router-dom";
import NavigationBar from "./Components/Navbar";
import AuthVerif from "./Pages/Auth/AuthVerif";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OnCheckIsLogin } from "./redux/feature/users";
function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const excludedPathsNavbar = ["/login", "/regist", "/verify"];

  const isExcludedNavbar = excludedPathsNavbar.some((path) =>
    pathname.startsWith(path)
  );

  useEffect(() => {
    dispatch(OnCheckIsLogin());
  }, []);
  return (
    <>
      <div className="">
        {isExcludedNavbar ? null : <NavigationBar />}

        <Routes>
          <Route path="/verify/:token" element={<AuthVerif />} />,
          {route.map((value) => value)}
        </Routes>
      </div>
    </>
  );
}

export default App;
