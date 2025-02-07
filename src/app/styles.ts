import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background-color: #141414;
  color: #fff;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  color: #e50914;
`;

export const ShowsGrid = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 0 10px;
`;

export const ShowCard = styled.div`
  border-radius: 10px;
  overflow: hidden;
  background-color: #333;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
export const ShowImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const ShowName = styled.h3`
  font-size: 1.1rem;
  margin-top: 10px;
  color: #fff;
  text-align: center;
  font-weight: bold;
  position: relative;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #e50914;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #e50914;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const ShowRating = styled.p`
  font-size: 1rem;
  color: #aaa;
  text-align: center;
  margin-bottom: 20px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #e50914;
  color: white;
  border: none;
  border-radius: 5px;
  margin: 0 10px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b20710;
  }

  &:disabled {
    background-color: #333;
    cursor: not-allowed;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;

  &:hover {
    color: #e50914;
  }
`;

export const PageNumberText = styled.span`
  margin: 0 10px;
  white-space: nowrap;
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  display: block;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #e50914;
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
