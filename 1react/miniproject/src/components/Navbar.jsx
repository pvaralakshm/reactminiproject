import { Navbar as BSNavbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <BSNavbar expand="lg" style={{ backgroundColor: "#343a40" }} variant="dark">
      <Container>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/students">Students List</Nav.Link>
            <Nav.Link as={Link} to="/add-student">Add Student</Nav.Link>
          </Nav>
          {/* Brand on the right */}
          <BSNavbar.Brand className="ms-auto">Student Dashboard</BSNavbar.Brand>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}


