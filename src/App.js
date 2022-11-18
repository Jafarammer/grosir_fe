import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// layout
import ShowLayout from "./layouts/ShowLayout";
// pages
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ShowLayout />}>
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
