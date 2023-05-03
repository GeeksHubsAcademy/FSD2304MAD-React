import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./layouts/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./layouts/Login/Login";
import { Names } from "./layouts/Names/Names";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/names"
            element={<Names />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
