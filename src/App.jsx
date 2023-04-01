import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Model from "./components/Pages/Model";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:id" element={<Model />} />
      </Routes>
    </>
  );
}

export default App;
