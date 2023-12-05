// import React from 'react'
import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Button, Input } from "@nextui-org/react";
const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="">
      <h1 className="font-Grotesk text-5xl text-neutral-400 font-bold">
        Jelajah
      </h1>
      <div className="font-Inter text-5xl font-extrabold mt-8 w-1/2">
        Welcome Back!
      </div>
      <div className="form-control mt-5">
        <Input
          type="email"
          variant={"bordered"}
          label="Email"
          radius={"md"}
          className="text-lg font-bold font-Grotesk"
          //   placeholder="Enter your email"
        />
      </div>
      <div className="form-control mt-5">
        <Input
          label="Password"
          radius={"md"}
          variant="bordered"
          className="text-lg font-bold font-Grotesk"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <IoEyeOffOutline className="text-2xl font-bold pointer-events-none" />
              ) : (
                <IoEyeOutline className="text-2xl font-bold pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
        />
      </div>
      <div className="mt-5">
        <Button
          radius="md"
          fullWidth
          className="text-lg font-bold font-Grotesk"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
