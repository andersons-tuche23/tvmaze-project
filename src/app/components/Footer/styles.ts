import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #141414;
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
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
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
justify-content: center;
align-items: center;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 15px;
  margin-top: 10px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Link = styled.a`
  color: #e50914;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #b20710;
  }
`;

export const Copyright = styled.div`
  /* background-color: #1a1a1a; */
  padding: 15px;
  font-size: 1rem;
  color: #ccc;
  margin-top: 20px;
`;
