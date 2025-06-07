import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from '../components/ToastService'

function Login() {
  const navigate = useNavigate();
  const toast = useToast();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(""); //incorrect password error messege to loginUser

  // Handler for login info form input changes
  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    // try {

    //   const response = await axios.post("http://localhost:8082/api/users/check", {
    //     email: loginInfo.email,
    //     password: loginInfo.password
    //   });

    // Check if login is successful
    if (/*response.data.success*/ true) {
      //stored userdata in the local storage
      // localStorage.setItem('userData', JSON.stringify(response.data.data));
      // setIsAuthenticated(true); //enables the router link from App.jsx via parameters?
      // console.log("login success"+response.data.message); //testing response
      // console.log(JSON.parse(localStorage.getItem('userData'))); //testing local storage
      const id = toast.open("Logged in as user...", 3000)
      navigate("/home");
    } else {
      const id = toast.open(
      "Login Failed...", 3000
    )
      console.log("Login failed: ", response.data.message);
      setErrorMessage("Invalid email or password");
    }
    // } catch (error) {
    //   console.log("Error during login: ", error);
    //   setErrorMessage("Invalid email or password");
    // }
  };

  return (
    <div className="flex items-center min-h-screen">
      <div className="mx-auto text-center">
        {/* title text */}
        <h1 className="text-3xl font-semibold text-gray-800">
          <span className="text-blue-500">Ex</span>
          <span className="text-black">treme</span>
        </h1>
        <p className="max-w-md mt-5 text-gray-500">
          Welcome back! Please enter your credentials to access your account and
          access your dashboard, personalized settings, and Extreme features.{" "}
        </p>

        {/* Login form */}
        <form onSubmit={loginUser}>
          <div className=" p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
            {/* for establishing divider for each child div */}
            <div className=" w-full rounded-lg divide-y divide-gray-200">
              {/* textboxes and login button(1/2)*/}
              <div className="px-5 py-7">
                <div className="">
                  <label
                    for="emailOrUsername"
                    className="text-left block mb-2 text-sm font-medium text-[#D3D3D3]"
                  >
                    Email or Username
                  </label>
                  <input
                    id="emailOrUsername"
                    type="email"
                    className="bg-[#F8F8F8] border border-[#EBEBEB] text-gray-800 placeholder-[#D3D3D3] text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5"
                    placeholder="Your email address"
                  />
                  {/* 
                  <p className="mt-2 text-sm text-red-400">
                    <span className="font-medium">Error:</span> Please fill out
                    this field to proceed.
                  </p>
                    */}
                </div>

                <div className="">
            <label
              for="password"
              className="text-left block mb-2 text-sm font-medium text-[#D3D3D3]"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="bg-[#F8F8F8] border border-[#EBEBEB] text-gray-800 placeholder-[#D3D3D3] text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5"
              placeholder="Your email address"
            />
            {/* 
            <p className="mt-2 text-sm text-red-400">
              <span className="font-medium">Error:</span> Please fill out this
              field to proceed.
            </p>
              */}
          </div>
                {/* Error Message */}
                {errorMessage && (
                  <div className="text-red-500 text-center mb-2">
                    {errorMessage}
                  </div>
                )}
                {/* Login button */}
                <button
                  type="submit"
                  className="mt-10 transition duration-200 bg-blue-800 hover:bg-blue-900 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-900 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                >
                  <span className="inline-block mr-2">Login</span>
                </button>
              </div>
              {/* forgot password & help content (2/2)*/}
              <div className="py-5">
                <p className="text-[#D3D3D3]">Trouble logging in?</p>
                <p className="text-[#555555]">Contact our Support Team</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
