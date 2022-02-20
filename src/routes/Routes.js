import React from "react";
import { Routes as Rts, Route } from "react-router-dom";

import Page404 from "../pages/error/Page404";
import Home from "../pages/home/HomePage";
import Character from "../pages/details/Character";

const Routes = () => (
  <Rts>
    <Route exact path="/" element={<Home />}></Route>
    <Route exact path="/character/:id" element={<Character />} />
    <Route path="*" element={<Page404 />} />
  </Rts>
);

export default Routes;
