import styled from "styled-components";

const Aboutdiv = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const H1 = styled.h1`
  font-size: xxx-large;
  font-family:
    "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans",
    Arial, sans-serif;
  color: #c6c6c7;

  .me {
    background: linear-gradient(to right, #66fcf1, #45a29e);
    background-size: cover;
    background-clip: text;
    color: transparent;
  }
`;

const Div = styled.div`
  height: 40vh;
  width: 100%;
  /* background-color: gray; */
  display: flex;
  justify-content: space-evenly;
  margin-top: 100px;
  margin-bottom: 110px;
`;

const Whodiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: solid 2px #66fcf1;
  border-bottom: solid 2px #66fcf1;
  border-right: solid 50px #66fcf1;

  h1 {
    font-size: xxx-large;
    font-family: math;
    font-weight: lighter;
    background: linear-gradient(to right, #66fcf1, #45a29e);
    background-size: cover;
    background-clip: text;
    color: transparent;
  }
`;

const Information = styled.div`
  height: 100%;
  width: 50%;
  color: #c6c6c7;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 25px;
  border-top: solid 2px #66fcf1;
  border-bottom: solid 2px #66fcf1;

  p {
    margin-left: 20px;
    font-size: medium;
    font-weight: 800;
    font-family:
      "Times new Roman", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans",
      Arial, sans-serif;
  }
`;

export const About = () => {
  return (
    <>
      <Aboutdiv>
        <H1>
          ABOUT <span className="me">ME?</span>
        </H1>
      </Aboutdiv>

      <Div>
        <Whodiv>
          <h1>Who am I</h1>
        </Whodiv>
        <Information>
          <p>
            I am a passionate and dedicated Computer Science student with a
            strong foundation in programming and problem-solving. I have
            hands-on experience in technologies like Java, Data Structures and
            Algorithms (DSA), MySQL, JavaScript, React, HTML, and CSS. I enjoy
            building efficient and user-friendly applications while continuously
            improving my coding skills. I am particularly interested in software
            development and full-stack web development, where I can apply both
            my logical thinking and creativity. I am always eager to learn new
            technologies, take on challenges, and grow as a developer. My goal
            is to build impactful solutions and contribute to innovative
            projects in the tech industry.
          </p>
        </Information>
      </Div>
    </>
  );
};
