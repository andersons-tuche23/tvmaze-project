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
} from "./styles";

interface Show {
  id: number;
  name: string;
  image: { medium: string };
  rating: { average: number };
}

const ITEMS_PER_PAGE = 20;

export default function Home() {
  const [shows, setShows] = useState<Show[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState<string | null>(null);

  console.log(shows, "vfdsvdxvfdsvfdvfsd");

  useEffect(() => {
    axios
      .get(
        `https://api.tvmaze.com/shows?page=${currentPage}&limit=${ITEMS_PER_PAGE}`
      )
      .then((response) => {
        setShows(response.data);
        setTotalPages(Math.ceil(250 / ITEMS_PER_PAGE));
      })
      .catch((error) => {
        setError(error.message);
        console.error("Erro ao buscar séries:", error);
      });
  }, [currentPage]);

  return (
    <Container>
      <Title>🎬 Séries Recomendadas</Title>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ShowsGrid>
        {shows.map((show) => (
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
          onClick={() =>
            setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
          }
          disabled={currentPage === 1}
        >
          Anterior
        </Button>
        <span style={{ margin: "0 10px" }}>
          Página {currentPage} de {totalPages}
        </span>
        <Button
          onClick={() =>
            setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Próxima
        </Button>
      </PaginationContainer>
    </Container>
  );
}
