import { Link } from "react-router-dom";
import RegistForm from "../../Components/RegistForm";

// import React from "react";
const AuthRegist = () => {
  // const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className=" h-screen flex items-center px-8">
          <div className="mx-auto w-[360px]">
            <RegistForm />
            <div className="mt-3">
              <p>
                If you have account,{" "}
                <Link to={"/login"}>
                  <button className="text-blue-600">Sign In</button>
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

export default AuthRegist;
