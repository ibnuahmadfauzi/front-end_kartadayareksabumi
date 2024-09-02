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
import Secondlayout from "./layouts/SecondLayout.js";
import Login from "./pages/admin/Login.js";
import ThirdLayout from "./layouts/ThirdLayout.js";
import Dashboard from "./pages/admin/Dashboard.js";
import Message from "./pages/admin/Message.js";
import General from "./pages/admin/General.js";
import User from "./pages/admin/User.js";
import AdminArticle from "./pages/admin/Article.js";
import Partner from "./pages/admin/Partner.js";
import Service from "./pages/admin/Service.js";
import Characteristic from "./pages/admin/Characteristic.js";
import ArticleEdit from "./pages/admin/ArticleEdit.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {/* Semua layout sekarang dibungkus dalam route utama "/" */}
      <Route path="/" element={<MainLayout />}>
        {/* Halaman home */}
        <Route index element={<Home />} />

        {/* Rute untuk artikel */}
        <Route path="artikel" element={<Articles type="general" />} />
        <Route
          path="artikel/keyword/"
          element={<Navigate to="/artikel" replace />}
        />
        <Route
          path="artikel/keyword/:keyword"
          element={<Articles type="search" />}
        />
        <Route path="artikel/:slug" element={<Article />} />

        {/* Rute untuk login */}
        <Route path="kdr-auth/login" element={<Secondlayout />}>
          <Route index element={<Login />} />
        </Route>

        {/* Semua rute /kdr-auth dibungkus di dalam route / */}
        <Route path="kdr-auth" element={<ThirdLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="article" element={<AdminArticle />} />
          <Route path="article/create" element={<ArticleEdit />} />
          <Route path="message" element={<Message />} />
          <Route path="general" element={<General />} />
          <Route path="user" element={<User />} />
          <Route path="partner" element={<Partner />} />
          <Route path="service" element={<Service />} />
          <Route path="characteristic" element={<Characteristic />} />
        </Route>

        {/* Penanganan untuk rute tidak ditemukan */}
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
