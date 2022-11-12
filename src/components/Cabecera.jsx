import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import { Link, NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import LogoPNG from '..//assets/img/LogoPNG.png'

import '..//assets/css/estiloCabecera.css'

const Cabecera = () => {
    return (
        <>
            <Navbar className='navegadorPublico' expand="lg">
                <Container >
                    <Navbar.Brand>
                        <Link to='/' >
                            <img src={LogoPNG}
                                alt="Logotipo Laboral Marketplace"
                                style={{ width: '180px' }} />
                        </Link>
                    </Navbar.Brand>
                    
                    <Nav className="justify-content-end">


                        <Nav.Item to='/Ingresar'>
                            <NavLink className="botonIngreso" to="/ingresar">
                                Ingresar</NavLink>
                        </Nav.Item>


                        <Nav.Item to='/Registrarse'>
                            <NavLink className="botonRegistrarse" to="/registrarse">
                                Registrarse</NavLink>
                        </Nav.Item>

                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Cabecera