import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {

  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
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
      if (/*response.data.success*/true) {
        //stored userdata in the local storage
        // localStorage.setItem('userData', JSON.stringify(response.data.data));
        // setIsAuthenticated(true); //enables the router link from App.jsx via parameters?
        // console.log("login success"+response.data.message); //testing response
        // console.log(JSON.parse(localStorage.getItem('userData'))); //testing local storage
        navigate('/home');
      } else {
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
        <h1 className="text-3xl font-semibold text-gray-800"><span className="text-blue-500">Ex</span>
        <span className="text-black">treme</span></h1>
        <p className="max-w-md mt-5 text-gray-500">Welcome back! Please enter your credentials to access your account and access your dashboard, personalized settings, and Extreme features. </p>

        {/* Login form */}
        <form onSubmit={loginUser}>
        
          <div className="bg-green-600 p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
            {/* for establishing divider for each child div */}
            <div className="bg-slate-700 w-full rounded-lg divide-y divide-red-600">
              {/* textboxes and login button(1/2)*/}
              <div className="px-5 py-7">
                <label className="font-semibold text-sm text-[#D3D3D3] pb-1 block text-left">E-mail</label>
                {/* Email Input */}
                <input 
                  name='email'
                  type="email" 
                  onChange={handleLoginInputChange}
                  value={loginInfo.email}
                  required
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" 
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }} 
                />

                <label className="font-semibold text-sm text-[#D3D3D3] pb-1 block text-left">Password</label>
                {/* Password Input */}
                <input 
                  name='password'
                  type="password" 
                  onChange={handleLoginInputChange}
                  value={loginInfo.password}
                  required
                  className="border rounded-lg px-3 py-2 mt-1 mb-10 text-sm w-full" 
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }} 
                />
                {/* Error Message */}
                {errorMessage && <div className="text-red-500 text-center mb-2">{errorMessage}</div>}                
                {/* Login button */}
                <button 
                  type="submit" 
                  className="transition duration-200 bg-blue-800 hover:bg-blue-900 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-900 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                  <span className="inline-block mr-2">Login</span>
                </button>
              </div>
              {/* forgot password & help content (2/2)*/}
              <div className="py-5">
                <p className='text-[#D3D3D3]'>Trouble logging in?</p>
                <p className='text-[#555555]'>Contact our Support Team</p>
              </div>
            </div>
          </div>
        
      </form>
      </div>
      
    </div>
  )
}

export default Login