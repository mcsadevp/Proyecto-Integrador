import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function CardCM({
  nombre,
  comuna,
  direccion,
  horASemana,
  horCSemana,
  horASabado,
  horCSabado,
  horADomingo,
  horCDomingo,
  telefonos,
  dominio,
  urgencia,
  red,
  email,
  clasificacion,
}) {
  return (
    <Card style={{ width: "120vh" }}>
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
      
        <Card.Title>{urgencia}</Card.Title>
        <Card.Text>
          {comuna} {direccion}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          Horario Lunes a Viernes: {horASemana} hasta {horCSemana}
        </ListGroup.Item>
        <ListGroup.Item>Fono: {telefonos}</ListGroup.Item>
        <ListGroup.Item>Tipo de centro: {clasificacion}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link>{dominio}</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardCM;
