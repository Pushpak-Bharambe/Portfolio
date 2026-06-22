import styled from "styled-components";
import SchoolIcon from "@mui/icons-material/School";
import DownloadIcon from "@mui/icons-material/Download";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";

const ResumeSection = styled.section`
  width: 100%;
  padding: 80px 20px;
  background: #0b0c10;
`;

const HeadingWrapper = styled.div`
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: #c5c6c7;
  margin-bottom: 20px;

  .resume {
    background: linear-gradient(to right, #66fcf1, #45a29e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const ResumeBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const DownloadButton = styled.a`
  text-decoration: none;
  padding: 12px 25px;
  border-radius: 10px;
  background: linear-gradient(to right, #66fcf1, #45a29e);
  color: #0b0c10;
  font-weight: bold;

  display: flex;
  align-items: center;
  gap: 10px;

  transition: 0.3s;

  &:hover {
    transform: translateY(-3px);
  }
`;

const Content = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Card = styled.div`
  background: #1f2833;
  padding: 25px;
  border-radius: 15px;
  margin-bottom: 25px;
  color: #c5c6c7;
  line-height: 1.8;
`;

const SectionHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  margin-top: 40px;
  margin-bottom: 20px;

  color: white;

  .icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(to right, #66fcf1, #45a29e);

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    color: #0b0c10;
  }

  h2 {
    margin: 0;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const SkillTag = styled.div`
  background: linear-gradient(to right, #66fcf1, #45a29e);
  color: #0b0c10;

  padding: 10px 18px;
  border-radius: 25px;

  font-weight: bold;

  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Resume = () => {
  return (
    <ResumeSection id="resume">
      <HeadingWrapper>
        <Heading>
          My <span className="resume">Resume</span>
        </Heading>
      </HeadingWrapper>

      <ResumeBtnWrapper>
        <DownloadButton
          href="/PushpakResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DownloadIcon />
          Download Resume
        </DownloadButton>
      </ResumeBtnWrapper>

      <Content>
        <Card>
          <h2>Pushpak C. Bharambe</h2>

          <p>📚 BE - Information Technology</p>
          <p>📍 Nashik, Maharashtra, India</p>
          <p>📧 pushpakbharambe20@gmail.com</p>
          <p>📱 +91 8551924591</p>

          <br />

          <p>
            Passionate Full Stack Java Developer with strong knowledge of Java,
            Spring Boot, React JS, MySQL, JavaScript, HTML, CSS, DSA, and
            Software Development. Focused on building scalable and user-friendly
            web applications.
          </p>
        </Card>

        <SectionHeading>
          <div className="icon">
            <SchoolIcon />
          </div>
          <h2>Education</h2>
        </SectionHeading>

        <Card>
          <h3>BE in Information Technology</h3>
          <p>Jawahar Institute of Technology, Nashik</p>
          <p>2022 – 2026</p>
          <p>Current CGPA: 6.76</p>
        </Card>

        <Card>
          <h3>Higher Secondary (12th)</h3>
          <p>P.O. Nahata College, Bhusawal</p>
          <p>2020 – 2022</p>
          <p>66%</p>
        </Card>

        <Card>
          <h3>Secondary School (10th)</h3>
          <p>DUPEMS, Savda</p>
          <p>2018 – 2020</p>
          <p>60%</p>
        </Card>

        <SectionHeading>
          <div className="icon">
            <WorkIcon />
          </div>
          <h2>Projects</h2>
        </SectionHeading>

        <Card>
          <h3>Company Management System</h3>

          <ul>
            <li>
              Developed a full-stack Company Management System using React,
              Spring Boot, and MySQL.
            </li>

            <li>
              Implemented Employee, Manager, and Admin modules with role-based
              access control.
            </li>

            <li>
              Built Expense Management features including reports,
              reimbursements, approval workflow, and tracking.
            </li>

            <li>Created responsive UI using React and Styled Components.</li>

            <li>Integrated REST APIs with Spring Boot and MySQL database.</li>

            <li>
              Included Attendance Tracking, Leave Management, Dashboard
              Analytics, and Expense Hub modules.
            </li>
          </ul>
        </Card>

        <SectionHeading>
          <div className="icon">
            <CodeIcon />
          </div>
          <h2>Skills</h2>
        </SectionHeading>

        <Card>
          <SkillsContainer>
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
            <SkillTag>DSA</SkillTag>
            <SkillTag>OOP</SkillTag>
            <SkillTag>DBMS</SkillTag>
            <SkillTag>Computer Vision</SkillTag>
            <SkillTag>Problem Solving</SkillTag>
          </SkillsContainer>
        </Card>
      </Content>
    </ResumeSection>
  );
};
