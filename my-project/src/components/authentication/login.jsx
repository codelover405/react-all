import React, { useState } from "react";
import styles from "../../styles";

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
    const email = input.email;
    const password = input.password;
    const cpassword = input.cpassword;
    const value = input.type === "checkbox" ? input.checked : input.value;
    setForm({ [name]: value });
  };
  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col ">
        <div className="container  max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              className={styles.input}
              name="name"
              value={form.name}
              placeholder="Full Name"
              onChange={handleChanges}
            />
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
            <input
              type="password"
              className={styles.input}
              name="confirm_password"
              value={form.cpassword}
              onChange={handleChanges}
              placeholder="Confirm Password"
            />
            <button type="submit" className={styles.greenBtn}>
              Create Account
            </button>
            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <a
              className="no-underline border-b border-blue text-blue"
              href="../login/"
            >
              Log in
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
