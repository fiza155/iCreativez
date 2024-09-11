import React from "react";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); // clear user state
    navigate("/login"); // Redirect
  };
  return (
    <div className=" justify-content-center align-items-center text-center">
      <h1 className="">This is a Dashboard</h1>

      {/* <Link to="/">Dashboard</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/register"}>Signup </Link> */}

      <button className="btn btn-danger  mt-4" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
