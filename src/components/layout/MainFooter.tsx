import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Nav, NavItem, NavLink } from "shards-react";

const menuItems = [
  {
    title: "Home",
    to: "#"
  },
  {
    title: "About",
    to: "#"
  },
];

const MainFooter = () => (
  <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
    <Container fluid={false}>
      <Row>
        <Nav>
          {menuItems.map((item, idx) => (
            <NavItem key={idx}>
              <NavLink tag={Link} to={item.to}>
                {item.title}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <span className="copyright ml-auto my-auto mr-2">
          Copyright © {new Date().getFullYear()} IndTexBr
        </span>
      </Row>
    </Container>
  </footer>
);

export default MainFooter;