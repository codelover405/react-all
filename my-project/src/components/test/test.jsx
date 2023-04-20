import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "../../styles";
import { useNavigate } from "react-router-dom";

class Raff extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        redirect: false,
      },
      formErrors: {
        name: null,
        email: null,
        password: null,
        confirmPassword: null,
      },
    };
  }

  handleChange = (e) => {
    const { name, value, checked } = e.target;
    const { form, formErrors } = this.state;
    let formObj = {};
    if (name === "language") {
      // handle the change event of language field
      if (checked) {
        // push selected value in list
        formObj = { ...form };
        formObj[name].push(value);
      } else {
        // remove unchecked value from the list
        formObj = {
          ...form,
          [name]: form[name].filter((x) => x !== value),
        };
      }
    } else {
      // handle change event except language field
      formObj = {
        ...form,
        [name]: value,
      };
    }
    this.setState({ form: formObj }, () => {
      if (!Object.keys(formErrors).includes(name)) return;
      let formErrorsObj = {};
      if (name === "password" || name === "confirmPassword") {
        let refValue =
          this.state.form[name === "password" ? "confirmPassword" : "password"];
        const errorMsg = this.validateField(name, value, refValue);
        formErrorsObj = { ...formErrors, [name]: errorMsg };
        if (!errorMsg && refValue) {
          formErrorsObj.confirmPassword = null;
          formErrorsObj.password = null;
        }
      } else {
        const errorMsg = this.validateField(
          name,
          name === "language" ? this.state.form["language"] : value
        );
        formErrorsObj = { ...formErrors, [name]: errorMsg };
      }
      this.setState({ formErrors: formErrorsObj });
    });
  };

  validateField = (name, value, refValue) => {
    let errorMsg = null;
    switch (name) {
      case "name":
        if (!value) errorMsg = "Please enter Name.";
        break;
      case "email":
        if (!value) errorMsg = "Please enter Email.";
        else if (
          !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          )
        )
          errorMsg = "Please enter valid Email.";
        break;
      case "password":
        // refValue is the value of Confirm Password field
        if (!value) errorMsg = "Please enter Password.";
        else if (refValue && value !== refValue)
          errorMsg = "Password and Confirm Password does not match.";
        break;
      case "confirmPassword":
        // refValue is the value of Password field
        if (!value) errorMsg = "Please enter Confirm Password.";
        else if (refValue && value !== refValue)
          errorMsg = "Password and Confirm Password does not match.";
        break;
    }
    return errorMsg;
  };

  validateForm = (form, formErrors, validateFunc) => {
    const errorObj = {};
    Object.keys(formErrors).map((x) => {
      let refValue = null;
      if (x === "password" || x === "confirmPassword") {
        refValue = form[x === "password" ? "confirmPassword" : "password"];
      }
      const msg = validateFunc(x, form[x], refValue);
      if (msg) errorObj[x] = msg;
    });
    return errorObj;
  };

  handleSubmit = async () => {
    let Navigate = useNavigate();
    const { form, formErrors } = this.state;
    const errorObj = this.validateForm(form, formErrors, this.validateField);
    if (Object.keys(errorObj).length !== 0) {
      this.setState({ formErrors: { ...formErrors, ...errorObj } });
      return false;
    }
    console.log("Data: ", form);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/signup",
        form
      );
      console.log("form", response.data);
      localStorage.setItem("form", JSON.stringify(response.data));
      Navigate("/login");
    } catch (error) {
      console.error(error);
    }

    // postData = async () => {
    // const response = await fetch("http://localhost:5000/api/signup", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(form),
    // });
    // const json = await response.json();
    // console.log(json);
    // };
  };

  render() {
    const { form, formErrors } = this.state;
    return (
      <>
        {/* <div className="signup-box">
          <p className="title">Sign up</p>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>
                  Name:<span className="asterisk">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={this.handleChange}
                  onBlur={this.handleChange}
                />
                {formErrors.name && (
                  <span className="err">{formErrors.name}</span>
                )}
              </div>
              <div className="form-group">
                <label>
                  Email:<span className="asterisk">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={this.handleChange}
                  onBlur={this.handleChange}
                />
                {formErrors.email && (
                  <span className="err">{formErrors.email}</span>
                )}
              </div>
              <div className="form-group">
                <label>
                  Password:<span className="asterisk">*</span>
                </label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={this.handleChange}
                  onBlur={this.handleChange}
                />
                {formErrors.password && (
                  <span className="err">{formErrors.password}</span>
                )}
              </div>
              <div className="form-group">
                <label>
                  Confirm Password:<span className="asterisk">*</span>
                </label>
                <input
                  className="form-control"
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={this.handleChange}
                  onBlur={this.handleChange}
                />
                {formErrors.confirmPassword && (
                  <span className="err">{formErrors.confirmPassword}</span>
                )}
              </div>
            </div>
          </div>
          <div className="form-group">
            <input
              type="button"
              className="btn btn-primary"
              value="Submit"
              onClick={this.handleSubmit}
            />
          </div>
        </div>
        <h3 style={{ textAlign: "center" }}>
          <a
            href="http://www.cluemediator.com/form-validation-in-reactjs"
            target="_blank"
          >
            Here is the step by step explanation of form validation in React JS
          </a>
        </h3> */}

        {/*  */}
        <div className="bg-grey-lighter min-h-screen flex flex-col ">
          <div className="container  max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Sign up</h1>
              <input
                type="text"
                className={styles.input}
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={this.handleChange}
                onBlur={this.handleChange}
              />
              {formErrors.name && (
                <span className={`${styles.inputError}`}>
                  {formErrors.name}
                </span>
              )}
              <input
                type="text"
                className={styles.input}
                name="email"
                value={form.email}
                onChange={this.handleChange}
                onBlur={this.handleChange}
                placeholder="Email"
              />
              {formErrors.email && (
                <span className={`${styles.inputError}`}>
                  {formErrors.email}
                </span>
              )}
              <input
                type="password"
                className={styles.input}
                value={form.password}
                onChange={this.handleChange}
                onBlur={this.handleChange}
                name="password"
                placeholder="Password"
              />
              {formErrors.password && (
                <span className={`${styles.inputError}`}>
                  {formErrors.password}
                </span>
              )}
              <input
                type="password"
                className={styles.input}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={this.handleChange}
                onBlur={this.handleChange}
                placeholder="Confirm Password"
              />
              {formErrors.confirmPassword && (
                <span className={`${styles.inputError}`}>
                  {formErrors.confirmPassword}
                </span>
              )}
              <button
                type="submit"
                onClick={this.handleSubmit}
                className={styles.blueFullBtn}
                value="Create Account"
              />

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
        {/* </div> */}
      </>
    );
  }
}

export default Raff;
