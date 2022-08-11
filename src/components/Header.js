import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";

const Header = ({ logo }) => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="mx-auto d-flex p-0">
            <img
              alt="iscp logo"
              src={logo}
              width="100"
              height="auto"
              className="me-3 rounded-circle"
            />
            <div className="text-center">
              <h6>Republic of the Philippines</h6>
              <h3>International State College of the Philippines</h3>
              <h5>Integrated University Information System (IUIS)</h5>
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Nav
        variant="pills"
        defaultActiveKey="/home"
        className="justify-content-center p-2"
      >
        <Nav.Item>
          <Nav.Link href="/home">Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Messages</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-2">Class Offerings</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-3">Registration</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-4">Profile</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-5">My Schedule</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-6">My Grades</Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
};

export default Header;
