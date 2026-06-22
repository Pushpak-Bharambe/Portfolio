import styled from "styled-components";

const AboutSection = styled.section`
  width: 100%;
  padding: 80px 20px;
  background: #0b0c10;
`;

const HeadingWrapper = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: #c5c6c7;
  font-family: "Trebuchet MS", sans-serif;

  .me {
    background: linear-gradient(to right, #66fcf1, #45a29e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  margin: auto;

  display: flex;
  align-items: stretch;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
  }
`;

const LeftSide = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 2px solid #66fcf1;
  border-bottom: 2px solid #66fcf1;
  border-right: 20px solid #66fcf1;

  min-height: 300px;

  h1 {
    font-size: 3rem;
    font-weight: 300;
    font-family: "Trebuchet MS", sans-serif;

    background: linear-gradient(to right, #66fcf1, #45a29e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    border-right: none;
    min-height: 150px;

    h1 {
      font-size: 2rem;
    }
  }
`;

const RightSide = styled.div`
  flex: 2;

  border-top: 2px solid #66fcf1;
  border-bottom: 2px solid #66fcf1;

  display: flex;
  align-items: center;

  padding: 30px;

  p {
    color: #c5c6c7;
    font-size: 1.05rem;
    line-height: 1.9;
  }

  @media (max-width: 768px) {
    text-align: center;
    padding: 25px 15px;

    p {
      font-size: 1rem;
      line-height: 1.8;
    }
  }
`;

export const About = () => {
  return (
    <AboutSection id="about">
      <HeadingWrapper>
        <Heading>
          ABOUT <span className="me">ME</span>
        </Heading>
      </HeadingWrapper>

      <Content>
        <LeftSide>
          <h1>Who Am I?</h1>
        </LeftSide>

        <RightSide>
          <p>
            I am a passionate and dedicated Information Technology student with
            a strong foundation in programming, problem-solving, and software
            development. I have hands-on experience with Java, Spring Boot,
            React JS, JavaScript, MySQL, HTML, CSS, and Data Structures &
            Algorithms.
            <br />
            <br />
            I enjoy building responsive and user-friendly web applications,
            designing scalable backend systems, and solving real-world
            development challenges. My interests lie in Full Stack Development,
            Software Engineering, and creating impactful digital solutions.
            <br />
            <br />I am continuously learning new technologies, improving my
            coding skills, and working on projects that strengthen my practical
            knowledge. My goal is to grow as a professional software developer
            and contribute to innovative products that make a difference.
          </p>
        </RightSide>
      </Content>
    </AboutSection>
  );
};
