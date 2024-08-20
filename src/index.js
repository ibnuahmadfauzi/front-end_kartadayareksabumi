import React from "react";
import ReactDOM from "react-dom/client";

// Import React Route
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import React Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Import CSS File
import "./assets/styles/index.css";

// Import Script File
import "./assets/script/index.js";

// Import Component Page
import Layout from "./pages/client/Layout.js";
import Home from "./pages/client/Home.js";
import NoPage from "./pages/client/NoPage.js";
import Articles from "./pages/client/Articles.js";
import Article from "./pages/client/Article.js";
import MainLayout from "./layouts/MainLayout.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/artikel" element={<Articles type="general" />} />
        <Route
          path="/artikel/keyword/"
          element={<Navigate to="/artikel" replace />}
        />
        <Route
          path="/artikel/keyword/:keyword"
          element={<Articles type="search" />}
        />
        <Route path="/artikel/:slug" element={<Article />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
