import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Main({ children }) {
  return (
    <Container fluid style={{backgroundColor: "red", marginTop: "400px"}}>
      <Row>
        <Col >
          {children}
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
