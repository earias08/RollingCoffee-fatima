import {Table, Button} from "react-bootstrap";

const Administrador = () => {
  return (
    <section>
      <div className="d-flex justify-content-between align-items-center">
      <h1 className="my-4">Productos Disponibles</h1>
      <Button><i class="bi bi-file-earmark-plus-fill"></i></Button>
      </div>  
      <Table striped bordered hover>
        <thead className="text-center">
          <tr>
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Url Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <Button className="mx-3"><i class="bi bi-pencil-square"></i></Button>
                <Button><i className="bi bi-trash3-fill"></i></Button>
            </td>
          </tr>
          
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
