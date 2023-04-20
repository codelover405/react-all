import React, { useState } from "react";
import styles from "../../styles";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = ({}) => {
  const [form, setForm] = useState([
    {
      email: "",
      password: "",
    },
  ]);

  const onLogin = async (e) => {
    e.preventDefault();

    try {
      const config = {
        Headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        "http://localhost:5000/api/login",
        form,
        config
      );
      console.log("response login", response.data);
      localStorage.setItem("form-login", JSON.stringify(response.data));
    } catch (error) {
      console.log("login error", error);
    }
  };
  const handleChanges = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col ">
        <div className="container  max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Log In</h1>
            <form onSubmit={onLogin}>
              <input
                type="text"
                className={styles.input}
                name="email"
                value={form.email}
                onChange={handleChanges}
                placeholder="Email"
              />
              <input
                type="password"
                className={styles.input}
                value={form.password}
                onChange={handleChanges}
                name="password"
                placeholder="Password"
              />
              <button type="submit" className={styles.blueFullBtn}>
                Login
              </button>
            </form>
            <div className="text-center text-sm mt-4">
              By signing up, you agree to the
              <Link className="no-underline border-b" href="#">
                Terms of Service
              </Link>{" "}
              and
              <Link className="no-underline border-b" to="/">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="mt-6">
            Already have an account?
            <Link
              className="no-underline border-b border-blue text-blue font-semibold ml-2"
              to="/"
            >
              Sign Up
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
