import React, { useState } from "react";
import axios from "axios";

function Test3() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="name"
        />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="password"
          onChange={handleChange}
        />
        <input
          type="password"
          name="cpassword"
          value={formData.cpassword}
          placeholder="cpassword"
          onChange={handleChange}
        />
        {/* <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Test3;
