import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #005f73, #0a9396);
  color: #fff;
  padding: 40px 20px;
  margin-top: 40px;
  text-align: center;
  position: relative;
  width: 100%;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  div {
    width: 40%;
    text-align: center;

    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 20px;
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }

    p {
      font-size: 1rem;
      color: #bbb;
    }
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ccc;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  transition: color 0.3s ease, text-decoration 0.3s ease;

  &:hover {
    color: #ffffff;
    text-decoration: underline;
  }

  svg {
    font-size: 1.5rem;
  }
`;

export const Copyright = styled.div`
  padding: 15px;
  font-size: 1rem;
  color: #ccc;
  margin-top: 20px;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;
