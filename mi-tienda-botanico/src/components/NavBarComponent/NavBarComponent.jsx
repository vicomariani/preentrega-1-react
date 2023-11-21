import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import estilos from "./Navbar.module.css";

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


const NavBarComponent = () => {

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
     .get('https://dummyjson.com/products/categories')
     .then((res) => setCategories(res.data))
     .catch((error) => console.log(error));
  }, []);

  return (
    <Navbar expand="lg" className={estilos.navegador}>
      <Container>
        <Navbar.Brand>
           <Link to={"/"}>
             <img src="../img/botanico_logo.png" className={estilos.logo} alt="logo botanico" />
           </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <NavDropdown title={<span className={estilos.boton}>Categorías</span>}>
              {categories.map((category, index) => {
                  return(
                    <NavDropdown.Item key={index}>
                      <Link to={`/category/${category}`}  className={estilos.categorias}>
                         {category}
                      </Link>
                    </NavDropdown.Item>
                  );
                })}                      
            </NavDropdown>
          </Nav>   
          <CartWidgetComponent />         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;