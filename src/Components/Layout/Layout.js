import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
