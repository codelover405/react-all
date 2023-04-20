import React, { useState } from "react";
import styles from "../styles";
import { logo1, cart } from "../assets/index";
import { Link, NavLink, Outlet } from "react-router-dom";
import { navLinks } from "../constants/index";
import Avatar from "./small/avatar";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-white shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to="/home" className={styles.link}>
                <h2 className="text-2xl font-bold">
                  <img src={logo1} className="w-10" alt="logo" />
                </h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    // close
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {navLinks.map((link, index) => {
                  return (
                    <li
                      key={link.id}
                      className={`${styles.nav_List} ${styles.link} `}
                    >
                      <NavLink
                        to={link.to}
                        className=""
                        style={({ isActive }) => ({
                          color: isActive ? "blue" : "black",
                        })}
                      >
                        {link.title}
                      </NavLink>
                    </li>
                  );
                })}
                <li
                  className={`${styles.link} ${styles.nav_List} font-bold text-blue-600`}
                >
                  <Avatar
                    className="object-cover"
                    classAdd={"flex justify-center"}
                  />
                  {""}
                  UserName
                </li>
                <li>
                  {" "}
                  <img
                    src={cart}
                    alt="cart"
                    className={`${styles.link} w-15 h-15`}
                  />{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Header;
