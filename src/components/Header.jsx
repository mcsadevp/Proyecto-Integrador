import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Avatar from "../assets/Avatar.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/RenameParchecurita.png";
import Hospital from "../assets/Hospital.png";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const user = {
  avatar: Avatar,
  correo: "giovanni.alamosc@gmail.com",
  nombre: "Giovanni",
  token: "123",
};

function Header() {
  const [userdata, setUserdata] = useState({});
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);
  const handleLogin = () => {
    setUserdata(user);
    handleShow();
  };
  useEffect(() => {}, []);

  return (
    <>
      <Navbar
        bg="primary"
        collapseOnSelect
        expand="lg"
        className="custom-navbar"
        style={{ height: "160px" }}
      >
        <Container>
          <Navbar expand="lg">
            <Navbar.Brand href="#home">
              <img
                src={Logo}
                alt="Logo"
                className="Logo"
                data-bs-toggle="collapse"
                data-bs-target="#responsive-navbar-nav"
              />
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">{}</Nav>
            </Navbar.Collapse>
          </Navbar>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Link to="/">
            <button type="button" class="btn btn-info">Inicio</button>
            </Link>
             <Link to="/hospitales">
            <button type="button" class="btn btn-info">Hospitales</button>
            </Link>
            <Link to="/info">
            <button type="button" class="btn btn-info">Información</button>
            </Link>
           
               
       
              
            </Nav>
            <div className="space"></div>
            {/* //operador ternario */}
            {userdata.nombre ? (
              <img src={Avatar} alt="Avatar" className="navbar_avatar" />
            ) : (
              <Button variant="primary" onClick={handleShow}>
                Login
              </Button>
            )}
            <Modal show={show} onHide={handleShow}>
              <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="ingresa password"
                      autoFocus
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleShow}>
                  Cancelar
                </Button>
                <Button variant="primary" onClick={handleLogin}>
                  Login
                </Button>
              </Modal.Footer>
            </Modal>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar
        style={{
          background: `url(${Hospital})`,
          backgroundSize: "contain",
          height: "100px",
        }}
        collapseOnSelect
        expand="lg"
        className="custom-navbar"
      >
        <Container>{/* <Navbar expand="lg"></Navbar> */}</Container>
      </Navbar>
    </>
  );
}

export default Header;
