import React, { useEffect, useState } from "react";
import styles from "../../styles";
import { Link } from "react-router-dom";
import axios from "axios";
import { redirect } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setData({
  //     ...data,
  //     [e.target.name]: value,
  //   });
  // };
  // console.log("data", data);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const userData = {
  //     email: data.email,
  //     password: data.password,
  //     cpassword: data.cpassword,
  //   };
  // try {

  // } catch (error) {
  //   console.log("error");
  // }
  //   const res = await axios
  //     .post("http://localhost:5000/api/signup", userData)
  //     .then((response) => {
  //       console.log(response.status, response.data.token);
  //       console.log("res", res);
  //     });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/signup",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // get
  async function fetchData() {
    const result = await axios.get("http://localhost:5000/test");
    setData(result);
    console.log(result);
  }

  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col ">
        <div className="container  max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className={styles.input}
                name="name"
                value={formData.name}
                placeholder="Full Name"
                onChange={handleChange}
              />
              <input
                type="text"
                className={styles.input}
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <input
                type="password"
                className={styles.input}
                value={formData.password}
                onChange={handleChange}
                name="password"
                placeholder="Password"
              />
              <input
                type="password"
                className={styles.input}
                name="cpassword"
                value={formData.cpassword}
                onChange={handleChange}
                placeholder="Confirm Password"
              />
              <button type="submit" className={styles.blueFullBtn}>
                Create Account
              </button>
            </form>
            <div className="text-center text-sm mt-4">
              By signing up, you agree to the
              <a className="no-underline border-b" href="#">
                Terms of Service
              </a>{" "}
              and
              <a className="no-underline border-b" href="#">
                Privacy Policy
              </a>
            </div>
          </div>

          <div className=" mt-6">
            Already have an account?
            {/* <a
              className="no-underline border-b border-blue text-blue"
              href="../login/"
            >
              Log in
            </a> */}
            <Link
              className="no-underline border-b border-blue text-blue text-b font-semibold ml-2"
              to="/login"
            >
              Log in
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
