import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';

const NavBarComponent = () => {
  const navStyles = {
    backgroundImage: 'linear-gradient(to left, white, rgb(19, 169, 19), white)',
  };

  return (
    <Navbar style={navStyles} expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
           <img src="../img/botanico_logo.png" alt="logo botanico" width="110px" height="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{ color: 'white' }} href="#home">Inicio</Nav.Link>
            <Nav.Link style={{ color: 'white' }} href="#link">Productos</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item style={{ color: 'rgb(19, 169, 19)' }} href="#action/3.1">Exterior</NavDropdown.Item>
              <NavDropdown.Item style={{ color: 'rgb(19, 169, 19)' }} href="#action/3.2">
                Interior
              </NavDropdown.Item>           
            </NavDropdown>
          </Nav>   
          <CartWidgetComponent />         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;