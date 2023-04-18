// import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import Media from "./small/Media";
// import Hero from "./small/Hero";

// const Layout = ({ children }) => {
//   return (
//     <div>
//       <Header />
//       <div>{children}</div>
//       <Hero />
//       <Media />
//       <Footer />
//     </div>
//   );
// };

// export default Layout;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
