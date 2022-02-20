import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Routes from "./routes/Routes";
import Header from "./components/header/Header";

import "./helpers/i18n";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes></Routes>
        <ToastContainer autoClose={2000} />
      </BrowserRouter>
    </>
  );
};

export default App;
