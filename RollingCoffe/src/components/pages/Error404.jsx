import img404 from "../../assets/error404.png";
import { Button } from "react-bootstrap";
import "../../App.css";

const Error404 = () => {
  return (
    <section id="contenError404">
      <img src={img404} alt="img error 404" className="img-fluid"></img>
      <Button className="my-4 btnError404">Inicio</Button>
    </section>
  );
};

export default Error404;
