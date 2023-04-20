import { useState } from "react";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import {
  Page404,
  HomePage,
  About,
  Signup,
  Login,
  Layout,
} from "./components/index";
import Forms from "./components/test/test2";
// import Product from "./components/product";
import Raff from "./components/test/test";
import Test3 from "./components/test/test3";
import Card from "./components/card/Card";
import Signup2 from "./components/test/test4";

// const Layout = ({ children }) => {
//   return (
//     <div>
//       <Header />
//       <div className="content">{children}</div>
//       <Footer />
//     </div>
//   );
// };

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Page404 />} />

        <Route path="/forms" element={<Forms />} />
        <Route path="/form" element={<Raff />} />
        <Route path="/test3" element={<Test3 />} />
        <Route path="/test4" element={<Signup2 />} />
        <Route
          path="/home"
          element={
            <Layout>
              {" "}
              <HomePage />{" "}
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/product"
          element={
            <Layout>
              {/* <Product /> */}
              <Card />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
