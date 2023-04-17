import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Media from "./small/Media";
// import { Header, Footer } from "../components";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Media />
      <Footer />
    </div>
  );
};

export default Layout;
