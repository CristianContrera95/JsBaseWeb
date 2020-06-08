import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavLink,
  NavbarBrand,
    Col, Row,
} from 'reactstrap';

import AuthService from "../../utils/AuthService";
import logo from '../../img/logofull.png'


class Header extends Component {
    constructor(props) {
        super(props);
        this.Auth = new AuthService();
        this.state = {
            name: null,
            isOpen: false,
            isAuthenticated: this.Auth.loggedIn()
        }
        this.toggle = this.toggle.bind(this);
        this.logout = this.logout.bind(this);
    }
    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    logout (e) {
        this.toggle();
        this.setState({isAuthenticated: false});
        this.props.onLogout(e);
    }
    render() {
        return (
            <div className="Head">
                <Navbar color="dark" className="text-right" light style={{background:"red"}}>

                    <Col className="text-left pl-0" href="home">
                        <a href="/home" style={{color: "white"}}>
                            <img src={logo} alt="Logo" className="mt-0" style={{ blockSize: "50px"}} />
                            {/*<b style={{ fontSize: "70px" }}>Subastas en Web</b>*/}
                        </a>
                    </Col>
                    { this.state.isAuthenticated ?
                        <NavLink className="text-left" href="/profile">
                            <NavbarBrand className="mr-2 ml-2 text-left" style={{color: "white"}}>
                                <Row>
                                    <Col><b>{ this.Auth.getUsername() }</b></Col>
                                    <Col><i className="fas fa-user-circle fa-stack-1x" /></Col>
                                </Row>
                            </NavbarBrand>
                        </NavLink>
                        :
                        null
                    }
                    <bc/>
                    <NavbarToggler className="ml-auto" style={{color: "danger"}} onClick={this.toggle} />

                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar >
                            <NavLink href="home" className="mt-3 text-right" style={{color: "white"}} >Inicio</NavLink>
                            <NavLink href="/contact" className=" text-right" style={{color: "white"}} >Contacto</NavLink>
                            <NavLink href="/faqs" className=" text-right" style={{color: "white"}} >FaQs</NavLink>
                            <br/>
                            { this.state.isAuthenticated ?
                                <NavLink className="text-right" onClick={this.logout} style={{color: "white"}}>
                                    <i className="fas fa-times-circle"></i><b> Logout </b>
                                </NavLink>
                                :
                                <div>
                                    <NavLink href="/login" className="text-right " style={{color: "white"}}>Login</NavLink>
                                    <NavLink href="/register" className="text-right" style={{color: "white"}} >Registrarse</NavLink>
                                </div>
                            }

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}


export default Header;