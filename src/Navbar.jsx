import styled from "styled-components";
import { useState } from "react";

const NavbarDiv = styled.nav`
  width: 100%;
  height: 70px;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  top: 0;
  z-index: 1000;

  background: rgba(11, 12, 16, 0.95);
  backdrop-filter: blur(10px);

  box-shadow: 0 0 10px rgba(102, 252, 241, 0.2);

  box-sizing: border-box;
`;

const Logo = styled.img`
  height: 55px;
  width: 55px;
  object-fit: contain;

  @media (max-width: 768px) {
    height: 45px;
    width: 45px;
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 30px;
  color: #66fcf1;
  cursor: pointer;
  z-index: 1100;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};

    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100vh;

    background: rgba(0, 0, 0, 0.5);
    z-index: 998;
  }
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  gap: 2.5rem;
  align-items: center;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

    width: 280px;
    max-width: 80vw;
    height: 100vh;

    background: #0b0c10;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 2rem;

    transition: right 0.4s ease;

    z-index: 999;

    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.5);
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
    left: 0;
    bottom: -5px;
    width: 0%;
    height: 2px;
    background: #66fcf1;
    transition: 0.3s;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const MobileTitle = styled.h1`
  display: none;

  @media (max-width: 768px) {
    display: block;
    color: #66fcf1;
    font-size: 32px;
    margin-bottom: 20px;
  }
`;

const MobileFooter = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    bottom: 40px;
    text-align: center;
    color: #c5c6c7;
    font-size: 13px;
  }
`;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <NavbarDiv>
        <Logo src="/PB logo-Photoroom.png" alt="PB Logo" />

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

      <Overlay isOpen={isOpen} onClick={closeMenu} />
    </>
  );
};
