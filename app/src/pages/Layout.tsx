import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Layout = () => {
  let [setHistoryIndex] = React.useState(window.history.state?.idx);
  let location = useLocation();

  // Expose the underlying history index in the UI for debugging
  React.useEffect(() => {
    setHistoryIndex(window.history.state?.idx);
  }, [location, setHistoryIndex]);

  // Give us meaningful document titles for popping back/forward more than 1 entry
  React.useEffect(() => {
    document.title = location.pathname;
  }, [location]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
