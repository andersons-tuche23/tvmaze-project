import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #141414;
  color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-bottom: 20px;
  line-height: 1.3;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  max-width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ShowImage = styled.img`
  width: 400px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  margin-right: 20px;
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const Summary = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #999;
  margin-bottom: 20px;
  text-align: justify;
  max-width: 800px;
`;

export const Genres = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #ccc;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Rating = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #ffcc00;
  margin-top: 20px;
`;

export const HeartIcon = styled.div`
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  margin-right: 10px;
`;

export const FollowText = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
  margin-top: 0;
`;

export const AdditionalInfo = styled.div`
  font-size: 1.1rem;
  margin-top: 20px;
  color: #bbb;
  p {
    margin-bottom: 8px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const LinkButton = styled.a`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #e50914;
  color: white;
  font-size: 1.1rem;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background-color: #b20710;
  }
`;

export const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 1.2rem;
  text-align: center;
  padding: 20px;
  background-color: #f8d7da;
  border-radius: 8px;
  margin-top: 20px;
  width: 100%;
  max-width: 500px;
`;

