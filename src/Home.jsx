import styled from "styled-components";
import { useEffect, useRef } from "react";
import "./style.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Homediv = styled.div`
  min-height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
  margin-bottom: 110px;
  color: #c5c6c7;

  @media (max-width: 768px) {
    width: 100%;

    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

const Informationdiv = styled.div`
  height: 25rem;
  width: 45%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  color: #c5c6c7;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    .Herodiv {
      align-items: center;
      justify-content: center;
      width: auto;
      height: auto;
    }
  }
  .typewriter {
    font-size: 32px;
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
    background-size: cover;
    background-clip: text;
    color: transparent;
  }

  h1 {
    margin-left: 20px;
  }
`;

const H1 = styled.h1`
  margin-top: 10px;
  margin-bottom: 40px;
`;

const ImgEx = styled.div`
  height: auto;
  width: 60%;
  margin-top: 10rem;
  display: flex;
  justify-content: flex-end;
  border-radius: 5px;
  box-shadow: inset 0 0 50px #66fcf1;
  border: solid 40px #66fcf1;

  @media (max-width: 768px) {
    height: auto;
    width: 50%;
  }
`;

const Herodiv = styled.div`
  height: auto;
  width: 100%;
  line-height: 1.5rem;
  margin-left: 20px;
  margin-bottom: 30px;
  font-size: large;
`;

const Imgdiv = styled.div`
  height: 25rem;
  width: 45%;
  display: flex;
  flex-direction: column;
  color: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    width: 100%;
  }
`;

const Img = styled.img`
  height: 30rem;
  width: 90%;
  margin-top: -10rem;

  @media (max-width: 768px) {
    height: auto;
    width: 100%;
  }
`;

const Contactdiv = styled.div`
  height: auto;
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-weight: 900;
  font-family:
    "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans",
    Arial, sans-serif;

  p {
    margin-bottom: 25px;
  }
`;

const HeroContact = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;

    width: 100%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }
`;

const Contactlink = styled.div`
  display: flex;
  flex-direction: row;
  height: 3rem;
  width: 100%;
  /* background-color: skyblue; */
  justify-content: center;
  align-items: center;
  gap: 20px;

  a {
    height: 3rem;
    width: 5rem;
    background-color: #c5c6c7;
    border-radius: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1f2833;
  }
  a:hover {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    width: 100%;
    height: auto;
  }
`;

const Connectdiv = styled.div`
  height: auto;
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-weight: 900;
  font-family:
    "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans",
    Arial, sans-serif;

  p {
    margin-bottom: 25px;
    margin-top: 25px;
  }
`;

const Connectlink = styled.div`
  display: flex;
  flex-direction: row;
  height: 3rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;

  a {
    height: 3rem;
    width: 5rem;
    background-color: #c5c6c7;
    border-radius: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1f2833;
  }
  a:hover {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    width: 100%;
    height: auto;
  }
`;

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
    <Homediv>
      <Informationdiv>
        <h1>
          Hi, I'm <span className="name">Pushpak Bharambe</span>
        </h1>
        <H1 className="typewriter">
          <span className="name">a</span> <span ref={textRef}></span>
          <span className="cursor">|</span>
        </H1>
        <Herodiv className="Herodiv">
          <p>
            I build Scalable Backend systems using java and design responsive,
            users-friendly interfaces with React.Passionate about writing clean
            code and building real-world web applications.
          </p>
        </Herodiv>

        <HeroContact>
          <Contactdiv>
            <p>Connect with me</p>

            <Contactlink>
              <a href="https://wa.link/didyet">
                <WhatsAppIcon></WhatsAppIcon>
              </a>
              <a href="mailto:pushpakbharambe20@gmail.com">
                <EmailIcon></EmailIcon>
              </a>
              {/* <a href="#">
                <InstagramIcon></InstagramIcon>
              </a>
               */}
              <a href="https://www.linkedin.com/in/pushpak-bharambe-a0b934327/?trk=public-profile-join-page">
                <LinkedInIcon></LinkedInIcon>
              </a>
            </Contactlink>
          </Contactdiv>
          <Connectdiv>
            <p>See what I'm doing</p>
            <Connectlink>
              <a href="https://github.com/Pushpak-Bharambe">
                <GitHubIcon></GitHubIcon>
              </a>
            </Connectlink>
          </Connectdiv>
        </HeroContact>
      </Informationdiv>

      <Imgdiv>
        <ImgEx>
          <Img src="/profile.png" alt="profile img"></Img>
        </ImgEx>
      </Imgdiv>
    </Homediv>
  );
};
