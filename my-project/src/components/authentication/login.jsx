import React, { useState } from "react";
import styles from "../../styles";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChanges = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.type === "checkbox" ? input.checked : input.value;
    setForm({ [name]: value });
  };
  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col ">
        <div className="container  max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Log In</h1>
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
              Create Account
            </button>
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
