import React from "react";
import App from "next/app";
import Navbar from "../components/Navbar";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Navbar />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
