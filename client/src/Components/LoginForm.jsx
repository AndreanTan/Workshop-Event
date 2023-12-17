// import React from 'react'
import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Button, Input } from "@nextui-org/react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { setEmail, setUsername } from "../redux/feature/users";
import { useDispatch } from "react-redux";
const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      // console.log(values);
      handleLogin(values);
    },
    validationSchema: yup.object().shape({
      email: yup.string().required().email(),
      password: yup.string().required().min(6),
    }),
  });

  const handleLogin = async (values) => {
    try {
      const checkUser = await axios.post(
        "http://localhost:4000/api/userLogin",
        values
      );

      console.log(checkUser);

      if (checkUser.data.isError)
        return Swal.fire({
          position: "center",
          icon: "error",
          title: `${checkUser.data.message}`,
          showConfirmButton: false,
          timer: 1500,
        });

      if (!checkUser.data.isError) {
        dispatch(setUsername(checkUser.data.data.username));
        dispatch(setEmail(checkUser.data.data.email));
        localStorage.setItem("idAccess", checkUser.data.data.id);
        localStorage.setItem("tokenAccess", checkUser.data.data.token);
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${checkUser.data.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <h1 className="font-Grotesk text-5xl text-neutral-400 font-bold">
        Jelajah
      </h1>
      <div className="font-Inter text-5xl font-extrabold mt-8 w-1/2">
        Welcome Back!
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control mt-5">
          <Input
            type="email"
            name="email"
            variant={"bordered"}
            label="Email"
            radius={"md"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="text-lg font-bold font-Grotesk"
            //   placeholder="Enter your email"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-600 first-letter:capitalize">
              {formik.errors.email}
            </div>
          ) : null}
        </div>
        <div className="form-control mt-5">
          <Input
            label="Password"
            name="password"
            radius={"md"}
            variant="bordered"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-600 first-letter:capitalize">
              {formik.errors.password}
            </div>
          ) : null}
        </div>
        <div className="mt-5">
          <Button
            radius="md"
            fullWidth
            type="submit"
            className="text-lg font-bold font-Grotesk"
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
