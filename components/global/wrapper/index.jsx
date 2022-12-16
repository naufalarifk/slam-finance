import React from "react";
import Footer from "./footer";
import Header from "./header";

const Wrapper = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Wrapper;
