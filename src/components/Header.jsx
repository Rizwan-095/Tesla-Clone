import React, { useState } from "react";
import styled from "styled-components";

function Header() {
  const [menuState, menuStateFun] = useState(false);
  const toggleMenu = () => {
    menuStateFun((prev) => !prev);
    console.log(menuState);
  };
  return (
    <Container>
      <a>
        <img src="logo.svg" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
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
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Houses</a>
        <a href="#">Solar Panels</a>
        <a href="#">Rockets</a>
        <a href="#">Twitters</a>
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
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;

  a {
    margin: 0 0 0 3rem;
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
`;

const Hamburger = styled.div`
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
    padding: 0.7rem 0;
  }
  img {
    width: 2.5rem;
  }
  span {
    display: flex;
    justify-content: right;
  }
`;
