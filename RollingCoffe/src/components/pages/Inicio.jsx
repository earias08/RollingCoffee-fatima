import banner from "../../assets/taza.jpg";
import "../../App.css";
import { Row, Col, Card, Button } from "react-bootstrap";

//const imgb='https://www.istockphoto.com/es/foto/tazas-de-caf%C3%A9-gm472113574-63201109'

const Inicio = () => {
  return (
    <section>
      <div id="contenBanner">
        <img src={banner} alt="banner" id="imgBanner" />
      </div>
      <h1 className="my-4">Nuestros Productos</h1>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                
              </Card.Text>
              <Button variant="primary">Ver mas</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </section>
  );
};

export default Inicio;
