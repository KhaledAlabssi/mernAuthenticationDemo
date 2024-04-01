import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const errorHandler = (err) => {
    toast.error(err, {
      position: "bottom-left",
    });
  };

  const successHandler = (msg) => {
    toast.success(msg, {
      position: "bottom-right",
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        successHandler(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        errorHandler(message);
      }
    } catch (error) {
      console.error(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full md:w-96 max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={submitHandler}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={changeHandler}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={changeHandler}
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={changeHandler}
                placeholder="username"
                className="input input-bordered"
                required
              />
              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
              <label className="label">
                <a className="label-text-alt link link-hover">
                  Already have an account?
                  <Link to={"/login"}>
                    <strong className="text-primary"> Login</strong>
                  </Link>
                </a>
              </label>
            </div>
          </form>
              </div>
              <ToastContainer />
      </div>
    </div>
  );
}

export default Signup;
