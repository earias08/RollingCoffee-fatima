import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/Menu";
import Inicio from "./components/pages/Inicio";
import Footer from "./components/Footer";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Menu></Menu>
      <Inicio></Inicio>
      <Footer></Footer>
    </>
  );
}

export default App;
