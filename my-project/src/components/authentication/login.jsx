import React, { useState } from "react";
import styles from "../../styles";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import SnackBars from "../small/snackbars";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = ({}) => {
  const navigate = useNavigate();
  const [form, setForm] = useState([
    {
      email: "",
      password: "",
    },
  ]);

  const [error, setError] = useState(false);
  const [logedin, setLogedin] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      // if (!form) {
      //   setError(true);
      // }
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
      console.log("response login", response.data.name);
      localStorage.setItem("form-login", JSON.stringify(response.data));
      setLogedin(true);
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (err) {
      console.log("login error", err);
      setError(true);
    }
  };
  const handleChanges = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {error && (
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              Please Fill The All the Field and Enter Valid Email!
            </Alert>
          </Snackbar>
        </Stack>
      )}
      {logedin && (
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              User Log in
            </Alert>
          </Snackbar>
        </Stack>
      )}

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
              <button
                type="submit"
                onClick={handleClick}
                className={styles.blueFullBtn}
              >
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
