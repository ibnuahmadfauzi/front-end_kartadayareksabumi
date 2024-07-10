import React from "react";
import ReactDOM from "react-dom/client";

// Import React Route
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import React Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Import CSS File
import "./assets/styles/index.css";

// Import Script File
import "./assets/script/index.js";

// Import Component Page
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
