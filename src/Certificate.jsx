import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #0b0c10;
  padding: 80px 20px;
`;

const Heading = styled.h1`
  text-align: center;
  color: #c5c6c7;
  margin-bottom: 50px;

  .certificate {
    background: linear-gradient(135deg, #66fcf1, #45a29e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const CertificateCard = styled.div`
  width: 350px;
  background: #1f2833;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;

  box-shadow: 0 0 15px rgba(102, 252, 241, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 0 25px rgba(102, 252, 241, 0.6);
  }
`;

const CertificateImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const CertificateInfo = styled.div`
  padding: 15px;
  text-align: center;
  color: white;

  h3 {
    margin: 0;
    color: #66fcf1;
  }
`;

export const Certificate = () => {
  const openCertificate = () => {
    window.open("/java-fullstack-certificate.pdf", "_blank");
  };

  return (
    <Container>
      <Heading>
        My <span className="certificate">Certificates</span>
      </Heading>

      <CardContainer>
        <CertificateCard onClick={openCertificate}>
          <CertificateImage
            src="/DSACertificate.jpg"
            alt="Java Full Stack Certificate"
          />

          <CertificateInfo>
            <h3>Java Full Stack Development</h3>
          </CertificateInfo>
        </CertificateCard>

        <CertificateCard onClick={openCertificate}>
          <CertificateImage
            src="/reactcertifiacte.jpg"
            alt="Java Full Stack Certificate"
          />

          <CertificateInfo>
            <h3>Java Full Stack Development</h3>
          </CertificateInfo>
        </CertificateCard>

        <CertificateCard onClick={openCertificate}>
          <CertificateImage
            src="/Java certificate.jpg"
            alt="Java Full Stack Certificate"
          />

          <CertificateInfo>
            <h3>Java Full Stack Development</h3>
          </CertificateInfo>
        </CertificateCard>

        <CertificateCard onClick={openCertificate}>
          <CertificateImage
            src="/Internship Certificate.jpg"
            alt="Java Full Stack Certificate"
          />

          <CertificateInfo>
            <h3>Java Full Stack Development</h3>
          </CertificateInfo>
        </CertificateCard>
      </CardContainer>
    </Container>
  );
};
