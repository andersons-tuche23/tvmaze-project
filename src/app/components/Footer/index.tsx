import React from "react";
import {
  FooterContainer,
  FooterContent,
  SocialLinks,
  Link,
  Copyright,
  SocialContainer,
} from "./styles";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; 

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <h3>Sobre Nós</h3>
          <p>
            Somos um site dedicado a trazer as melhores recomendações de séries!
          </p>
        </div>
        <SocialContainer>
          <h3>Links Úteis</h3>
          <SocialLinks>
            <Link href="https://www.facebook.com" target="_blank">
              <FaFacebook /> Facebook
            </Link>
            <Link href="https://www.instagram.com" target="_blank">
              <FaInstagram /> Instagram
            </Link>
            <Link href="https://www.twitter.com" target="_blank">
              <FaTwitter /> Twitter
            </Link>
          </SocialLinks>
        </SocialContainer>
      </FooterContent>
      <Copyright>
        <p>&copy; 2025 Séries Recomendadas. Todos os direitos reservados.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
