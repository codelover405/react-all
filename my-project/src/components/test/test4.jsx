import React, { useEffect, useState } from "react";
import styles from "../../styles";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup2 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !cpassword) {
      console.log("Please Fill all the Fields");
      setError("place all the fields.....");
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/signup",
        formData
      );
      localStorage.setItem("setUser", JSON.stringify(response.data));
      console.log(response.data);
      navigate("/login");
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

export default Signup2;
