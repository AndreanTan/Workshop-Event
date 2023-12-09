// import { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../Components/LoginForm";

// import React from "react";
const AuthLogin = () => {
  // const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className=" h-screen flex items-center px-8">
          <div className="mx-auto w-[360px]">
            <LoginForm />
            <div className="mt-3">
              <p>
                If you dont have account,{" "}
                <Link to={"/regist"}>
                  <button className="text-blue-600">Sign Up</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex items-center hidden">
          <img src="../image-login.jpg" alt="" draggable="false" />
        </div>
      </div>
    </div>
  );
};

export default AuthLogin;
