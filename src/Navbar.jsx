import styled from "styled-components";
import { useState } from "react";

const NavbarDiv = styled.div`
  height: 80px;
  width: 100%;
  padding: 0 25px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  top: 0;
  z-index: 1000;

  background: rgba(11, 12, 16, 0.95);
  backdrop-filter: blur(10px);

  box-shadow: 0 0 10px rgba(102, 252, 241, 0.4);
`;

const Logo = styled.img`
  height: 75px;
  width: 75px;
  object-fit: contain;
`;

const Hamburger = styled.div`
  display: none;
  font-size: 35px;
  color: #66fcf1;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

    width: 100%;
    height: 100vh;

    background: rgba(11, 12, 16, 0.98);
    backdrop-filter: blur(15px);

    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 2rem;

    transition: all 0.4s ease-in-out;

    margin: 0;
    padding: 0;

    z-index: 999;
  }
`;

const A = styled.a`
  text-decoration: none;
  color: #c5c6c7;
  font-size: 18px;
  font-weight: 600;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    color: #66fcf1;
  }

  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    left: 0;
    bottom: -5px;
    background: #66fcf1;
    transition: 0.3s;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 28px;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const MobileTitle = styled.h1`
  display: none;

  @media (max-width: 768px) {
    display: block;
    color: #66fcf1;
    font-size: 40px;
    margin-bottom: 30px;
    font-family: "Trebuchet MS", sans-serif;
  }
`;

const MobileFooter = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    bottom: 50px;
    text-align: center;
    color: #c5c6c7;
    font-size: 14px;
  }
`;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <NavbarDiv>
      <Logo src="/PB logo-Photoroom.png" alt="logo" />

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✕" : "☰"}
      </Hamburger>

      <Ul isOpen={isOpen}>
        <MobileTitle>Pushpak</MobileTitle>

        <li>
          <A href="#home" onClick={closeMenu}>
            Home
          </A>
        </li>

        <li>
          <A href="#about" onClick={closeMenu}>
            About
          </A>
        </li>

        <li>
          <A href="#skills" onClick={closeMenu}>
            Skills
          </A>
        </li>

        <li>
          <A href="#resume" onClick={closeMenu}>
            Resume
          </A>
        </li>

        <li>
          <A href="#certificate" onClick={closeMenu}>
            Certificates
          </A>
        </li>

        <li>
          <A href="#contact" onClick={closeMenu}>
            Contact
          </A>
        </li>

        <MobileFooter>
          <p>Pushpak Bharambe</p>
          <p>Full Stack Java Developer</p>
        </MobileFooter>
      </Ul>
    </NavbarDiv>
  );
};
