import React from "react";
import { Nav, NavLink, NavMenu } 
    from "../components/NavbarElements";

const Example = () => {
  return (

    <>
      <Nav>
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/page" activeStyle>
            Page
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            Blogs
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Example;