"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Title,
  ShowsGrid,
  ShowCard,
  ShowImage,
  ShowName,
  ShowRating,
  PaginationContainer,
  Button,
  LinkStyled,
  PageNumberText, 
} from "./styles";

interface Show {
  id: number;
  name: string;
  image: { medium: string };
  rating: { average: number };
}

const ITEMS_PER_PAGE = 24;

export default function Home() {
  const [shows, setShows] = useState<Show[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedPage = localStorage.getItem("currentPage");
    if (savedPage) {
      setCurrentPage(Number(savedPage));
    }

    axios
      .get("https://api.tvmaze.com/shows")
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => {
        setError(error.message);
        console.error("Erro ao buscar séries:", error);
      });
  }, []);

  const totalPages = Math.ceil(shows.length / ITEMS_PER_PAGE);

  const displayedShows = shows.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    localStorage.setItem("currentPage", page.toString());
  };

  return (
    <Container>
      <Title>🎬 Séries Recomendadas</Title>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ShowsGrid>
        {displayedShows.map((show) => (
          <ShowCard key={show.id}>
            <LinkStyled href={`/shows/${show.id}`}>
              <ShowImage src={show.image?.medium} alt={show.name} />
              <ShowName>{show.name}</ShowName>
            </LinkStyled>
            <ShowRating>⭐ {show.rating?.average || "N/A"}</ShowRating>
          </ShowCard>
        ))}
      </ShowsGrid>

      <PaginationContainer>
        <Button
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
        >
          Anterior
        </Button>
        <PageNumberText>
          Página {currentPage} de {totalPages}
        </PageNumberText>
        <Button
          onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Próxima
        </Button>
      </PaginationContainer>
    </Container>
  );
}
