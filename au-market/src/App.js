import React from "react";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

//Rotas para renderizar
const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

export default App;
