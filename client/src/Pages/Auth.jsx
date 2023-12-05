import { useState } from "react";
import LoginForm from "../Components/LoginForm";
import RegistForm from "../Components/RegistForm";

// import React from "react";
const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className=" h-screen flex items-center px-8">
          <div className="mx-auto w-[360px]">
            {isLogin ? <LoginForm /> : <RegistForm />}
            <div className="mt-3">
              {isLogin ? (
                <p>
                  If you dont have account,{" "}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-blue-600"
                  >
                    Sign Up
                  </button>
                </p>
              ) : (
                <p>
                  If you have account,{" "}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-blue-600"
                  >
                    Sign In
                  </button>
                </p>
              )}
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

export default Auth;
