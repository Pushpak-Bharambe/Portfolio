import styled from "styled-components";
import SchoolIcon from "@mui/icons-material/School";
import DownloadIcon from "@mui/icons-material/Download";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";

const Resumediv = styled.div`
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

  .resume {
    background: linear-gradient(to right, #66fcf1, #45a29e);
    background-size: cover;
    background-clip: text;
    color: transparent;
  }
`;

const Resumebtn = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  button {
    height: 3rem;
    width: 10%;
    background: linear-gradient(to right, #66fcf1, #45a29e);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-weight: 800;
    font-family:
      "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans",
      Arial, sans-serif;
  }
`;

const Information = styled.div`
  height: auto;
  width: 100%;
  color: #c5c6c7;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  padding: 20px;
  flex-direction: column;
  align-items: center;
`;

const SelfInfo = styled.div`
  height: auto;
  width: 60%;
  background-color: #1f2833;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  line-height: 25px;
  padding: 20px;
  border-radius: 10px;

  .name {
    margin-bottom: 10px;
  }
`;

const EducationHead = styled.div`
  margin-right: 700px;
  margin-top: 30px;
  gap: 10px;
  display: flex;
  align-items: center;

  .logo {
    height: 50px;
    width: 50px;
    color: #1f2833;
    background: linear-gradient(to right, #66fcf1, #45a29e);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Education = styled.div`
  height: auto;
  width: 60%;
  background-color: #1f2833;
  display: flex;
  flex-direction: column;
  line-height: 25px;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
`;

const ProjectHead = styled.div`
  width: 60%;
  margin-top: 40px;
  display: flex;
  align-items: center;
  gap: 10px;

  .logo {
    height: 50px;
    width: 50px;
    color: #1f2833;
    background: linear-gradient(to right, #66fcf1, #45a29e);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Project = styled.div`
  width: 60%;
  background-color: #1f2833;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  line-height: 25px;

  h3 {
    color: #66fcf1;
    margin-bottom: 10px;
  }

  ul {
    padding-left: 20px;
  }

  li {
    margin-bottom: 8px;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const SkillsHead = styled.div`
  width: 60%;
  margin-top: 40px;
  display: flex;
  align-items: center;
  gap: 10px;

  .logo {
    height: 50px;
    width: 50px;
    color: #1f2833;
    background: linear-gradient(to right, #66fcf1, #45a29e);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const SkillsSection = styled.div`
  width: 60%;
  background-color: #1f2833;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;

  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const SkillTag = styled.div`
  background: linear-gradient(to right, #66fcf1, #45a29e);
  color: #0b0c10;
  padding: 10px 18px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 14px;

  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const Resume = () => {
  return (
    <>
      <Resumediv>
        <H1>
          My <span className="resume">Resume</span>
        </H1>
      </Resumediv>

      <Resumebtn>
        <button>
          <DownloadIcon></DownloadIcon>Download Resume
        </button>
      </Resumebtn>

      <Information>
        <SelfInfo>
          <h1 className="name">Pushpak C. Bharambe</h1>
          <p>📚 BE--Information Technology</p>
          <p>📍Nashik,Maharashtra,India</p>
          <p>📩pushpakbharambe20@gmail.com|📱+91 8551924591</p>
          <p>
            Passionate Information Technology experienced in Computer vision ,
            Java, DSA, MySQL, JavaScript, and React and
          </p>
          <p> always driven to build impactful solutions.</p>
        </SelfInfo>

        <EducationHead>
          <logo className="logo">
            <SchoolIcon></SchoolIcon>
          </logo>
          <h1>Education</h1>
        </EducationHead>

        <Education>
          <h3>BE in Information Technology</h3>
          <h5>JIT--Jawahar Institute Of Technology,Nashik</h5>
          <h5>2022-2026 --Current CGPA:6.23</h5>
        </Education>

        <Education>
          <h3>Higher Secondary(12th)</h3>
          <h5>P.O Nahata College,Bhusawal</h5>
          <h5>2020-2022--66%</h5>
        </Education>

        <Education>
          <h3>Secondary(10th)</h3>
          <h5>DUPEMS,Savda</h5>
          <h5>2018-2020--60.2%</h5>
        </Education>

        <ProjectHead>
          <div className="logo">
            <WorkIcon />
          </div>
          <h1>Projects</h1>
        </ProjectHead>

        <Project>
          <h3>Company Management System</h3>

          <ul>
            <li>
              Developed a full-stack Company Management System using React,
              Spring Boot, and MySQL.
            </li>

            <li>
              Implemented Employee, Manager, and Admin modules with secure
              role-based access.
            </li>

            <li>
              Built Expense Management features including expense reports,
              reimbursement requests, approval workflow, and status tracking.
            </li>

            <li>Designed responsive UI using React and Styled Components.</li>

            <li>Integrated REST APIs with Spring Boot and MySQL database.</li>

            <li>
              Features include Employee Management, Expense Hub, Attendance
              Tracking, Leave Requests, and Dashboard Analytics.
            </li>
          </ul>
        </Project>

        <SkillsHead>
          <div className="logo">
            <CodeIcon />
          </div>
          <h1>Skills</h1>
        </SkillsHead>

        <SkillsSection>
          <SkillTag>Java</SkillTag>
          <SkillTag>Spring Boot</SkillTag>
          <SkillTag>React JS</SkillTag>
          <SkillTag>JavaScript</SkillTag>
          <SkillTag>HTML</SkillTag>
          <SkillTag>CSS</SkillTag>
          <SkillTag>MySQL</SkillTag>
          <SkillTag>Git</SkillTag>
          <SkillTag>GitHub</SkillTag>
          <SkillTag>REST API</SkillTag>
          <SkillTag>Data Structures</SkillTag>
          <SkillTag>OOP</SkillTag>
          <SkillTag>DBMS</SkillTag>
          <SkillTag>Computer Vision</SkillTag>
          <SkillTag>Problem Solving</SkillTag>
        </SkillsSection>
      </Information>
    </>
  );
};
