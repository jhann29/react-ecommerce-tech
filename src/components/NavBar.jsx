import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand as={Link} to="/">
          TechStore
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
