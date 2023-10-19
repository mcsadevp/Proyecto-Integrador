import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Main({ children }) {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div>
            {children}
            <div className="index">
              <div className="div">
                <div className="overlap">
                  <div className="rectangle" />
                  <img
                    className="element"
                    alt="Element"
                    src="https://cdn.animaapp.com/projects/652f333c3653e92087cd2b9f/releases/65308f9f70b79ea74ce2413b/img/55680619-trabajadores-de-la-salud-en-el-fondo-del-hospital-m-dic.png"
                  />
                  <div className="rectangle-2" />
                  <p className="encuentra-el">
                    <br />
                    &#34;Encuentra el personal médico y el centro asistencial
                    que mejor se adapten a tus necesidades.&#34;
                  </p>
                </div>
                <div className="overlap-group">
                  <img
                    className="img"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/652f333c3653e92087cd2b9f/releases/65308f9f70b79ea74ce2413b/img/rectangle-5.png"
                  />
                  <div className="rectangle-3" />
                  <p className="perm-tenos-guiarte-a">
                    <span className="text-wrapper">
                      {" "}
                      <br />
                    </span>
                    <span className="span">
                      <br />
                      &#34;Permítenos guiarte a través de
                    </span>
                    <span className="text-wrapper-2">&nbsp;</span>
                    <span className="span">
                      nuestro portal interactivo para conducirte hacia tu
                      destino&#34;
                    </span>
                  </p>
                  <img
                    className="element-mxiwtjl"
                    alt="Element"
                    src="https://cdn.animaapp.com/projects/652f333c3653e92087cd2b9f/releases/65308f9f70b79ea74ce2413b/img/61mx3i3wtjl-1.png"
                  />
                </div>
              </div>
            </div>
            );
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
