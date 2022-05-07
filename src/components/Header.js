import React from "react";
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, DropdownItem, DropdownToggle, DropdownMenu, NavbarText, Collapse, UncontrolledDropdown, Input, Button, Form } from "reactstrap";

function Header() {
    return (
        <div className="container">
        <Navbar color="light" expand="md" light>
    <NavbarBrand href="/">
      reactstrap
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/components/">
            Components
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            GitHub
          </NavLink>
        </NavItem>
        <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            Options
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Option 1
            </DropdownItem>
            <DropdownItem>
              Option 2
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Reset
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
      <NavbarText>
        Simple Text
      </NavbarText>
      <Form className="d-flex">
        <Input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <Button className="btn btn-outline-success" type="submit">Search</Button>
      </Form>
    </Collapse>
  </Navbar>
        </div>
    )
}

export default Header;