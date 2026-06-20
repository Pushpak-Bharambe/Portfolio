import styled from "styled-components";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
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
  margin-bottom: 50px;
  font-size: 3rem;

  .highlight {
    background: linear-gradient(135deg, #66fcf1, #45a29e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormSection = styled.div`
  flex: 1;
  background: #1f2833;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(102, 252, 241, 0.15);
`;

const ContactSection = styled.div`
  flex: 1;
  background: #1f2833;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(102, 252, 241, 0.15);
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #45a29e;
  background: #0b0c10;
  color: white;
  outline: none;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #45a29e;
  background: #0b0c10;
  color: white;
  outline: none;
  resize: none;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 15px 30px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  background: linear-gradient(to right, #66fcf1, #45a29e);
  color: #0b0c10;

  &:hover {
    transform: scale(1.05);
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
  color: white;

  svg {
    color: #66fcf1;
    font-size: 35px;
  }

  h3 {
    margin: 0;
    color: #66fcf1;
  }

  p {
    margin: 5px 0 0 0;
  }
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
    <Container>
      <Heading>
        Let's <span className="highlight">Connect & Collaborate</span>
      </Heading>

      <Content>
        {/* Contact Form */}
        <FormSection>
          <h2 style={{ color: "#66fcf1" }}>Send a Message</h2>
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

          <Button onClick={sendEmail}>Send Message</Button>
        </FormSection>

        {/* Contact Information */}
        <ContactSection>
          <h2 style={{ color: "#66fcf1", marginBottom: "40px" }}>
            Contact Information
          </h2>

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

          <div
            style={{
              marginTop: "50px",
              color: "#c5c6c7",
              lineHeight: "1.8",
            }}
          >
            I am always interested in discussing new opportunities,
            collaborating on exciting projects, and connecting with fellow
            developers and professionals.
          </div>
        </ContactSection>
      </Content>
    </Container>
  );
};
