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
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  div {
    width: 30%;

    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
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
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: 10px;
`;
export const Link = styled.a`
  color: #ccc;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  transition: color 0.3s ease, text-decoration 0.3s ease;

  &:hover {
    color: #ffffff;
    text-decoration: underline;
  }
`;

export const Copyright = styled.div`
  padding: 15px;
  font-size: 1rem;
  color: #ccc;
  margin-top: 20px;
  text-align: center;
`;
