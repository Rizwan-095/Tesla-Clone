import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

// find the change in url when you click on the link

function Header() {
  const [menuState, menuStateFun] = useState(false);
  const Location = useLocation();

  //This code is used to change the state of the menu when the user navigates to a different page.
  //menuStateFun is a function that changes the state of the menu.
  //Location.pathname is the pathname of the current URL.

  useEffect(() => {
    menuState && menuStateFun(false);
  }, [Location.pathname]);

  const toggleMenu = () => {
    menuStateFun((prev) => !prev);
  };
  return (
    <Container>
      <Link to={"/"}>
        <img src="/logo.svg" />
      </Link>
      <Menu>
        <Link to="model-s">Model S2</Link>
        <Link to="model-3">Model 3</Link>
        <Link to="model-x">Model X</Link>
        <Link to="model-y">Model Y</Link>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <img src="icons8-menu-rounded-50.png" alt="" onClick={toggleMenu} />
      </RightMenu>

      <Hamburger show={menuState}>
        <span>
          <img src="icons8-multiply-50.png" alt="" onClick={toggleMenu} />
        </span>
        <Link to="model-s">Model S</Link>
        <Link to="model-3">Model 3</Link>
        <Link to="model-x">Model X</Link>
        <Link to="model-y">Model Y</Link>
        <Link to="solar-roof">Solar Roof</Link>
        <Link to="solar-panels">Solar Panels</Link>
      </Hamburger>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  text-transform: uppercase;
  padding: 0.5rem 2rem;
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  font-weight: 600;
  align-items: center;
  z-index: 100;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;

  a {
    margin: 0 0 0 3rem;
    border-bottom: 2px solid transparent;
    padding: 0.2rem 0.5rem;
    &:hover {
      border-bottom: 2px solid red;
      transition: all 1s;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 1000px) {
    /* For mobile phones: */
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  flex-direction: row;

  a:first-child {
    margin-right: 1rem;
  }
  img {
    margin-left: 10px;
    width: 18px;
  }

  a {
    border-bottom: 2px solid transparent;
    padding: 0.2rem 0.5rem;
    &:hover {
      border-bottom: 2px solid red;
      transition: all 1s;
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 1000px) {
    /* For mobile phones: */
    a {
      display: none;
    }
  }
`;

const Hamburger = styled.div`
  z-index: 100;
  top: 0;
  right: 0;
  width: 20rem;
  padding-left: 3rem;
  padding-top: 2rem;
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 100vh;
  font-weight: 100;
  transform: translateX(100%);
  transform: ${(props) => (props.show ? "translateX(0)" : "trasnlateX(100%)")};
  transition: all 0.2s;

  a {
    padding: 0.7rem 0rem;
    margin: 0rem 2rem 0 0;
    &:hover {
      cursor: pointer;
      background-color: #f5f5f5;
      trasition: all 0.2s;
    }
  }
  img {
    width: 2.5rem;
  }
  span {
    display: flex;
    justify-content: right;
  }
`;
