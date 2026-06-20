import styled from "styled-components";

const SkillsSection = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 80px 20px;
  background: #0b0c10;
`;

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const H1 = styled.h1`
  font-size: 3rem;
  color: #c5c6c7;
  font-family: "Trebuchet MS", sans-serif;
  letter-spacing: 2px;

  .skills {
    background: linear-gradient(135deg, #66fcf1, #45a29e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SkillsBucket = styled.div`
  max-width: 1200px;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 30px;
`;

const SkillCard = styled.div`
  background: rgba(31, 40, 51, 0.8);
  backdrop-filter: blur(12px);

  border: 1px solid rgba(102, 252, 241, 0.2);
  border-radius: 20px;

  padding: 30px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: all 0.4s ease;
  cursor: pointer;

  box-shadow: 0 0 15px rgba(102, 252, 241, 0.15);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 25px rgba(102, 252, 241, 0.5);
    border-color: #66fcf1;
  }
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;

  transition: transform 0.4s ease;

  ${SkillCard}:hover & {
    transform: rotate(10deg) scale(1.1);
  }
`;

const SkillName = styled.h3`
  color: #ffffff;
  margin-top: 20px;
  font-size: 1.2rem;
  letter-spacing: 1px;
`;

export const Skills = () => {
  const skills = [
    { name: "React", image: "react.png" },
    { name: "MySQL", image: "sql.png" },
    { name: "Java", image: "java.png" },
    { name: "CSS", image: "css.jpg" },
    { name: "HTML", image: "html.png" },
    { name: "Git", image: "git.png" },
    { name: "JavaScript", image: "js.jpg" },
  ];

  return (
    <SkillsSection>
      <TitleWrapper>
        <H1>
          My <span className="skills">Skills</span>
        </H1>
      </TitleWrapper>

      <SkillsBucket>
        {skills.map((skill, index) => (
          <SkillCard key={index}>
            <Img src={skill.image} alt={skill.name} />
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </SkillsBucket>
    </SkillsSection>
  );
};
