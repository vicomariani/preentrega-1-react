import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import estilos from "./Navbar.module.css";

const NavBarComponent = () => {
  
  return (
    <Navbar expand="lg" className={estilos.navegador}>
      <Container>
        <Navbar.Brand  href="#home">
           <img src="../img/botanico_logo.png" className={estilos.logo} alt="logo botanico" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={estilos.boton} href="#home">Inicio</Nav.Link>
            <Nav.Link className={estilos.boton} href="#link">Productos</Nav.Link>
            <NavDropdown title={<span className={estilos.boton}>Categorías</span>}>
              <NavDropdown.Item className={estilos.categorias} href="#action/3.1">Exterior</NavDropdown.Item>
              <NavDropdown.Item className={estilos.categorias} href="#action/3.2">Interior</NavDropdown.Item>           
            </NavDropdown>
          </Nav>   
          <CartWidgetComponent />         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;