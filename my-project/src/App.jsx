import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
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
import Main from "./components/product/main";
import FinalProduct from "./components/test/testProduct/FinalProduct";
import SortList from "./components/test/sortlist";
import All from "./components/test/new/All";
import ProductLists from "./components/test/pp/ProductList";
import FishingDemoApp from "./components/test/ref";
import Filter from "./components/test/Filter";
import Car from "./components/test/Car";
// import { Side, AdminHeader } from "./components/admin/index";
import AdminLayout from "./components/admin/layout";
import { AdminContent } from "./components/admin";

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
              <HomePage />
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

        <Route
          path="/clients"
          element={
            <Layout>
              {/* <Product /> */}
              {/* <Main /> */}
              {/* <FishingDemoApp /> */}
              {/* <Filter /> */}
              <Car />
            </Layout>
          }
        />

        <Route
          path="/like"
          element={
            <Layout>
              {/* <Product /> */}
              <FinalProduct />
              {/* <SortList /> */}
            </Layout>
          }
        />

        <Route
          path="/new"
          element={
            <Layout>
              {/* <Product /> */}
              <ProductLists />
              {/* <SortList /> */}
            </Layout>
          }
        />

        {/* sidebar */}
        {/* <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/:id" element={<AdminContent />} />
        </Route> */}

        <Route
          path="/admin/:id"
          element={
            <AdminLayout>
              <AdminContent />
            </AdminLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
