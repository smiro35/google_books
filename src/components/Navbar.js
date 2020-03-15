import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

// const myNavbar = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

function MyNavbar(){



  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Google Books</NavbarBrand>
        
        
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/search/">Search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/save">Save</NavLink>
            </NavItem>
            
          </Nav>
          <NavbarText>Simple Text</NavbarText>
       
      </Navbar>
    </div>
  );
}

export default MyNavbar;



