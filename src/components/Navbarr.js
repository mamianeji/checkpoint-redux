import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Navbarr() {
  return (
    <div>
       <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Game App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
          
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#games"> <Link to="/" style={{textDecoration:"none", color:"black" }}>Games </Link></Nav.Link>
            <Nav.Link href="#about"><Link to="/about" style={{textDecoration:"none", color:"black" }}>About </Link></Nav.Link>
            <Nav.Link href="#contact"><Link to="/contact" style={{textDecoration:"none", color:"black" }}>Contact </Link></Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbarr