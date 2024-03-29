import React from "react"
import { Link } from "gatsby"
import {SearchForm} from "./searchForm"

import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {

  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        <Container>
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span">КОНТИНЕНТ</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/page-2" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2">
                Page 2
              </Nav.Link>
            </Link>
          </Nav>
          <Nav className="ml-auto">
            <SearchForm collapsed={true}/>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default CustomNavbar
