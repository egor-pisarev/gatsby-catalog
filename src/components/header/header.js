import React from "react"
import Img from "gatsby-image"
import {Container, Navbar, Nav, Button} from "react-bootstrap"
import NavItem from "./navItem"
import {Link} from "gatsby"
import "./header.scss"

const Header = ({logoImage}) => (
    <header>
        <Navbar expand="lg" fixed="top" variant="dark">
            <Container>
                <Link to="/" className="navbar-brand"><Img fixed={logoImage} /></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavItem to="/">Главная</NavItem>
                        <NavItem to="/">Каталог</NavItem>
                        <NavItem to="/">Контакты</NavItem>
                    </Nav>
                    <Button variant="danger">Заказать</Button>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    </header>
)

export default Header