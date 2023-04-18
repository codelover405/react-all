import { useState } from "react";
import axios from "axios";

function Forms() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      await axios.post("http://localhost:5000/api/signup", formData);
      console.log("Form submitted");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="email">password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      <label htmlFor="email">cpassword</label>
      <input
        type="password"
        id="cpassword"
        name="cpassword"
        value={formData.cpassword}
        onChange={handleChange}
      />

      {/* <label htmlFor="message">Message</label> */}
      {/* <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      ></textarea> */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Forms;
