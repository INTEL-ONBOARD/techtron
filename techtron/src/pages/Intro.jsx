import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

function Intro() {
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login"); // Navigate to the login page after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timeout
  }, [navigate]);

  return (
    <div className="flex flex-col items-center gap-5 justify-center h-screen bg-white text-black">
      {/* Logo text */}
      <h1 className="text-3xl font-medium">
        <span className="text-blue-500">Ex</span>
        <span className="text-black">treme</span>
      </h1>
      {/* Spinner */}
      <Spinner/>
    </div>
  );
}

export default Intro;
