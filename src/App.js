import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { DataContext } from "./utils/context";
// layout
import ShowLayout from "./layouts/ShowLayout";
import HideLayout from "./layouts/HideLayout";
// pages
import Home from "./pages/Home";
import Product from "./pages/Product";
import EditProduct from "./pages/EditProduct";
import Search from "./pages/Search";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Logout from "./pages/auth/Logout";

function App() {
  axios.interceptors.request.use((config) => {
    if (localStorage.getItem("token")) {
      config.headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
    }
    return config;
  });

  return (
    <DataContext.Provider value={JSON.parse(localStorage.getItem("user"))}>
      <BrowserRouter>
        <Routes>
          {/* Show nav */}
          <Route element={<ShowLayout />}>
            <Route path="/" element={<App />} />
            <Route index element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/editProduct/:id" element={<EditProduct />} />
            <Route path="/searchPage/:keyword" element={<Search />} />
          </Route>
          {/* Hide nav*/}
          <Route element={<HideLayout />}>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/logout" element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
