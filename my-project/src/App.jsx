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
import Apps from "./components/test";
import Forms from "./components/test2";
import Test3 from "./components/test3";

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
      {/* <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/home" element={<Layout />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/about" element={<About />} />

        <Route element={<Layout />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes> */}
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Page404 />} />

        <Route path="/raff" element={<Apps />} />
        <Route path="/form" element={<Forms />} />
        <Route path="/test" element={<Test3 />} />
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
      </Routes>
    </div>
  );
}

export default App;
