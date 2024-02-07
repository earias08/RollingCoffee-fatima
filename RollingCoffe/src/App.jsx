//import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/Menu";
import Inicio from "./components/pages/Inicio";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import Error404 from "./components/pages/Error404";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Menu></Menu>
      <Container className="contenPrincipal">
        <Inicio></Inicio>
        <Error404></Error404>
      </Container>

      <Footer></Footer>
    </>
  );
}

export default App;
