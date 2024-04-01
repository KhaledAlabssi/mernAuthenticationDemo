import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
function Home() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies();
  const [username, setUsername] = useState("");

  useEffect(() => {
      const verifyCookie = async () => {
        console.log(cookies);
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:5000/",
        {},
        {
          withCredentials: true,
        }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, { position: "top-right" })
        : (removeCookie("token"), navigate("/login"));
      };
      verifyCookie()
  }, [cookies, navigate, removeCookie]);
    
    const logout = () => {
        removeCookie('token')
        navigate('/login')
    }
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Hello there <strong>{username}</strong>
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button onClick={logout} className="btn btn-primary">
            Logout
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Home;
