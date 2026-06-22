import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 80px 20px;
  background: #0b0c10;
`;

const Heading = styled.h1`
  text-align: center;
  color: #c5c6c7;
  margin-bottom: 60px;
  font-size: 3rem;

  .certificate {
    background: linear-gradient(135deg, #66fcf1, #45a29e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const CardContainer = styled.div`
  max-width: 1300px;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  gap: 30px;
`;

const CertificateCard = styled.div`
  background: #1f2833;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;

  box-shadow: 0 0 15px rgba(102, 252, 241, 0.15);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 0 25px rgba(102, 252, 241, 0.5);
  }
`;

const CertificateImage = styled.img`
  width: 100%;
  height: 230px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const CertificateInfo = styled.div`
  padding: 20px;
  text-align: center;

  h3 {
    color: #66fcf1;
    margin-bottom: 10px;
  }

  p {
    color: #c5c6c7;
    line-height: 1.6;
  }
`;

export const Certificate = () => {
  const certificates = [
    {
      title: "Data Structures & Algorithms",
      image: "/DSACertificate.jpg",
      file: "/DSACertificate.jpg",
      description:
        "Completed Data Structures and Algorithms training with practical problem-solving experience.",
    },
    {
      title: "React JS Development",
      image: "/reactcertifiacte.jpg",
      file: "/reactcertifiacte.jpg",
      description:
        "Built responsive user interfaces and modern web applications using React JS.",
    },
    {
      title: "Java Programming",
      image: "/Java certificate.jpg",
      file: "/Java certificate.jpg",
      description:
        "Gained strong understanding of Core Java, OOP concepts, and application development.",
    },
    {
      title: "Internship Certificate",
      image: "/Internship Certificate.jpg",
      file: "/Internship Certificate.jpg",
      description:
        "Successfully completed internship and worked on real-world software development projects.",
    },
  ];

  const openCertificate = (file) => {
    window.open(file, "_blank");
  };

  return (
    <Container id="certificate">
      <Heading>
        My <span className="certificate">Certificates</span>
      </Heading>

      <CardContainer>
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={index}
            onClick={() => openCertificate(certificate.file)}
          >
            <CertificateImage src={certificate.image} alt={certificate.title} />

            <CertificateInfo>
              <h3>{certificate.title}</h3>
              <p>{certificate.description}</p>
            </CertificateInfo>
          </CertificateCard>
        ))}
      </CardContainer>
    </Container>
  );
};
