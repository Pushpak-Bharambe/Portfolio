import styled from "styled-components";
import { useEffect, useRef } from "react";
import "./style.css";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Homediv = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 50px 5%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;

  color: #c5c6c7;

  @media (max-width: 992px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 40px;
    padding: 40px 20px;
  }
`;

const Informationdiv = styled.div`
  flex: 1;
  max-width: 650px;

  .typewriter {
    font-size: 2rem;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
  }

  .cursor {
    display: inline-block;
    animation: blink 0.7s infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  .name {
    background: linear-gradient(to right, #66fcf1, #45a29e);
    background-clip: text;
    color: transparent;
  }

  h1 {
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;

    .typewriter {
      font-size: 1.5rem;
    }

    h1 {
      font-size: 1.8rem;
    }
  }
`;

const H1 = styled.h1`
  margin-bottom: 30px;
`;

const Herodiv = styled.div`
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Imgdiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const ImgEx = styled.div`
  width: 350px;
  max-width: 100%;

  border: 10px solid #66fcf1;
  border-radius: 20px;

  box-shadow:
    0 0 25px rgba(102, 252, 241, 0.4),
    inset 0 0 25px rgba(102, 252, 241, 0.4);

  overflow: hidden;

  @media (max-width: 768px) {
    width: 280px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const HeroContact = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Contactdiv = styled.div`
  p {
    margin-bottom: 15px;
    font-weight: 700;
  }
`;

const Connectdiv = styled.div`
  p {
    margin-bottom: 15px;
    font-weight: 700;
  }
`;

const Contactlink = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;

  a {
    width: 50px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #c5c6c7;
    color: #1f2833;

    border-radius: 10px;

    transition: 0.3s;
  }

  a:hover {
    transform: translateY(-5px);
  }
`;

const Connectlink = styled(Contactlink)``;

export const Home = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const words = [
      "Web Developer",
      "Frontend Developer",
      "Full Stack Developer",
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentWord = words[wordIndex];

      if (!textRef.current) return;

      if (!isDeleting) {
        textRef.current.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
          setTimeout(() => (isDeleting = true), 1000);
        }
      } else {
        textRef.current.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }

      setTimeout(typeEffect, isDeleting ? 50 : 100);
    }

    typeEffect();
  }, []);

  return (
    <Homediv id="home">
      <Informationdiv>
        <h1>
          Hi, I'm <span className="name">Pushpak Bharambe</span>
        </h1>

        <H1 className="typewriter">
          <span className="name">a</span> <span ref={textRef}></span>
          <span className="cursor">|</span>
        </H1>

        <Herodiv>
          <p>
            I build scalable backend systems using Java and design responsive,
            user-friendly interfaces with React. Passionate about writing clean
            code and building real-world web applications.
          </p>
        </Herodiv>

        <HeroContact>
          <Contactdiv>
            <p>Connect with me</p>

            <Contactlink>
              <a href="https://wa.link/didyet" target="_blank" rel="noreferrer">
                <WhatsAppIcon />
              </a>

              <a href="mailto:pushpakbharambe20@gmail.com">
                <EmailIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/pushpak-bharambe-a0b934327/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </Contactlink>
          </Contactdiv>

          <Connectdiv>
            <p>See what I'm doing</p>

            <Connectlink>
              <a
                href="https://github.com/Pushpak-Bharambe"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            </Connectlink>
          </Connectdiv>
        </HeroContact>
      </Informationdiv>

      <Imgdiv>
        <ImgEx>
          <Img src="/profile.png" alt="Pushpak Bharambe" />
        </ImgEx>
      </Imgdiv>
    </Homediv>
  );
};
