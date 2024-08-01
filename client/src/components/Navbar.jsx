import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const handleUserClick = () => {
        navigate("/user-form");
    }

    const handleAdminClick = () => {
        navigate("/dashboard");
    }
  return (
    <div>
      <button className="bg-gray-800 text-white py-2 px-4 mr-4 rounded hover:bg-gray-600 focus:outline-none" onClick={() => handleUserClick()}>
        Form
      </button>
      <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none" onClick={() => handleAdminClick()}>
        Admin Dashboard
      </button>
    </div>
  );
}

export default Navbar;
