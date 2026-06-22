import styled from "styled-components";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  background: #0b0c10;
  padding: 80px 20px;
`;

const Heading = styled.h1`
  text-align: center;
  color: #c5c6c7;
  margin-bottom: 60px;
  font-size: 3rem;

  .highlight {
    background: linear-gradient(135deg, #66fcf1, #45a29e);
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

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #1f2833;
  border-radius: 20px;
  padding: 30px;

  box-shadow: 0 0 20px rgba(102, 252, 241, 0.12);
`;

const FormTitle = styled.h2`
  color: #66fcf1;
  margin-bottom: 25px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 18px;

  border-radius: 10px;
  border: 1px solid #45a29e;

  background: #0b0c10;
  color: white;

  outline: none;

  &:focus {
    border-color: #66fcf1;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 160px;

  padding: 15px;

  border-radius: 10px;
  border: 1px solid #45a29e;

  background: #0b0c10;
  color: white;

  resize: vertical;
  outline: none;

  &:focus {
    border-color: #66fcf1;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 14px 30px;

  border: none;
  border-radius: 10px;

  font-weight: bold;
  cursor: pointer;

  background: linear-gradient(to right, #66fcf1, #45a29e);
  color: #0b0c10;

  transition: 0.3s;

  &:hover {
    transform: translateY(-3px);
  }
`;

const ContactTitle = styled.h2`
  color: #66fcf1;
  margin-bottom: 30px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;

  margin-bottom: 30px;

  svg {
    color: #66fcf1;
    font-size: 32px;
    margin-top: 3px;
  }

  h3 {
    margin: 0;
    color: #66fcf1;
  }

  p {
    color: #c5c6c7;
    margin-top: 5px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;

  a {
    width: 50px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #0b0c10;
    border: 1px solid #45a29e;
    border-radius: 10px;

    color: #66fcf1;

    transition: 0.3s;
  }

  a:hover {
    transform: translateY(-4px);
    border-color: #66fcf1;
  }
`;

const Description = styled.p`
  color: #c5c6c7;
  line-height: 1.8;
  margin-top: 20px;
`;

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_k9p8p8d",
        "template_vsg1hm2",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "ZJvSTqD9aRbPeJ8mn",
      )
      .then(() => {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
      });
  };

  return (
    <Container id="contact">
      <Heading>
        Let's <span className="highlight">Connect</span>
      </Heading>

      <Content>
        <Card>
          <FormTitle>Send Me a Message</FormTitle>

          <form onSubmit={sendEmail}>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <TextArea
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            />

            <Button type="submit">Send Message</Button>
          </form>
        </Card>

        <Card>
          <ContactTitle>Contact Information</ContactTitle>

          <ContactItem>
            <EmailIcon />
            <div>
              <h3>Email</h3>
              <p>pushpakbharambe20@gmail.com</p>
            </div>
          </ContactItem>

          <ContactItem>
            <PhoneIcon />
            <div>
              <h3>Phone</h3>
              <p>+91 8551924591</p>
            </div>
          </ContactItem>

          <ContactItem>
            <LocationOnIcon />
            <div>
              <h3>Location</h3>
              <p>Nashik, Maharashtra, India</p>
            </div>
          </ContactItem>

          <Description>
            I'm always interested in discussing new opportunities, collaborating
            on exciting projects, and connecting with developers, recruiters,
            and professionals from the tech industry.
          </Description>

          <SocialLinks>
            <a
              href="https://www.linkedin.com/in/pushpak-bharambe-a0b934327/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>

            <a
              href="https://github.com/Pushpak-Bharambe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
          </SocialLinks>
        </Card>
      </Content>
    </Container>
  );
};
