// import React from 'react'
import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Button, Input } from "@nextui-org/react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const RegistForm = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleRegist = async (values) => {
    try {
      console.log(values);
      const createAccount = await axios.post(
        "http://localhost:4000/api/userRegist",
        values
      );
      console.log(createAccount);

      if (createAccount.data.isError)
        return Swal.fire({
          position: "center",
          icon: "error",
          title: `${createAccount.data.message}`,
          showConfirmButton: false,
          timer: 1500,
        });

      if (!createAccount.data.isError) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${createAccount.data.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      // console.log(values);
      handleRegist(values);
    },
    validationSchema: yup.object().shape({
      username: yup.string().required(),
      email: yup.string().required().email(),
      password: yup.string().required().min(6),
    }),
  });
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
            type="text"
            variant={"bordered"}
            label="Username"
            name="username"
            radius={"md"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="text-lg font-bold font-Grotesk"
            //   placeholder="Enter your email"
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="text-red-600 first-letter:capitalize">
              {formik.errors.username}
            </div>
          ) : null}
        </div>
        <div className="form-control mt-5">
          <Input
            type="email"
            variant={"bordered"}
            label="Email"
            name="email"
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
            radius={"md"}
            variant="bordered"
            name="password"
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
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegistForm;
