//import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Menu from "./components/Menu";
import Inicio from "./components/pages/Inicio";
import Administrador from "./components/pages/Administrador";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import Error404 from "./components/pages/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detalle from "./components/pages/Detalle";
//import banner from "../src/assets/taza.jpg";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Menu></Menu>
      {/*<div id="contenBanner">
        <img src={banner} alt="banner" id="imgBanner" />
  </div>*/}
      <Container className="contenPrincipal container-fluid">
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route
            exact
            path="/administrador"
            element={<Administrador></Administrador>}
          ></Route>
          <Route
            exact
            path="/detalle"
            element={<Detalle></Detalle>}
          ></Route>
          <Route
            exact
            path="/administrador/crear"
            element={<Administrador></Administrador>}
          ></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
      </Container>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
