import React from "react";
import { logo, logo1 } from "../../assets/index";
import { NavLink, Outlet, Link } from "react-router-dom";
import { adminLink } from "../../constants/index";

const Side = () => {
  return (
    <div>
      <ul className="h-screen  bg-slate-800 fixed w-1/5">
        <img src={logo1} alt="logo" className="w-8 h-8 mx-6" />
        {adminLink.map((e, index) => (
          <li key={e.id} className="py-3 mx-6 cursor-pointer">
            <NavLink
              to={e.to}
              style={({ isActive }) => ({
                color: isActive ? "red" : "white",
              })}
              className={({ isActive }) => ({
                color: isActive,
              })}
            >
              {" "}
              {e.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Side;
