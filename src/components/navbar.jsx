import React from "react";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { ShoppingCardContext } from "../context/shoppingCardContext";
import { CartOpentContext } from "../context/cartOpen";
const Navbar = () => {
  const [quantity] = useContext(ShoppingCardContext);
  const [isCardOpen, setIsCardOpen] = useContext(CartOpentContext);
  console.log(isCardOpen);
  return (
    <>
      <NavbarBs
        style={{ position: "sticky" }}
        className="bg-white shadow-sm mb-3"
      >
        <Container>
          <Nav style={{ display: "flex", gap: "20px" }}>
            <NavLink style={{ textDecoration: "none", fontSize: '22px', marginLeft: '30px' }} to="/">
              Home
            </NavLink>
            <NavLink style={{ textDecoration: "none", fontSize: '22px', marginLeft: '30px' }} to="/store">
              Store
            </NavLink>
            <NavLink style={{ textDecoration: "none", fontSize: '22px', marginLeft: '30px' }} to="/about">
              About
            </NavLink>
          </Nav>
          <Button
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
            onClick={() => setIsCardOpen(!isCardOpen)}
          >
            <AiOutlineShoppingCart />
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                position: "absolute",
                bottom: "-10px",
                right: "0px",
                width: "25px",
              }}
            >
              {Object.values(quantity).reduce((ac, item) => ac + item)}
            </div>
          </Button>
        </Container>
      </NavbarBs>
      <Outlet />
    </>
  );
};

export default Navbar;
