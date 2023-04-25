import React from "react";
import { logo, logo1 } from "../../assets/index";
import { NavLink, Outlet, Link } from "react-router-dom";

const adminLink = [
  {
    id: "Dashboard",
    title: "Dashboard",
    to: "/admin/dashboard",
  },
  {
    id: "Team",
    title: "Team",
    to: "/admin/team",
  },
  {
    id: "Projects",
    title: "Projects",
    to: "/admin/projects",
  },
  {
    id: "Calendar",
    title: "Calendar",
    to: "/admin/calendar",
  },
  {
    id: "Documents",
    title: "Documents",
    to: "/admin/documents",
  },
  {
    id: "Reports",
    title: "Reports",
    to: "/admin/reports",
  },
];

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
              className=""
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
