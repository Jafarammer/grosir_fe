import React from "react";
import { Outlet } from "react-router-dom";
// component
import Navbar from "../components/Navbar";

function ShowLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default ShowLayout;
