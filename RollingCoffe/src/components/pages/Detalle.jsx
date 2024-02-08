import cafe from "../../assets/cafe.jpg";
import { Image, Row, Col } from "react-bootstrap";

const Detalle = () => {
  return (
    <section id="contenDetalle" className="my-5">
      <div id="contenImgDetalle">
        <Image src={cafe} alt="cafe" id="imgDetalle"  />
      </div>
      <div id="contenTextoDetalle" className="m-4">
        <h3>Cafe Americano</h3>
        <p>
          El cafe americano es una bebida caliente que consiste en un espresso
          diluido con agua caliente lo que resulta en una taza de cafe suave y
          aromatico. Es una opcion popular para aquellos que prefieren un cafe
          menos intenso que el espresso tradicional. Perfecto para disfrutar en
          cualquier momento del dia.
        </p>
      </div>
    </section>
  );
};

export default Detalle;
