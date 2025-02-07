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
  SearchInput,
  SearchContainer,
} from "./styles";
import Footer from "./components/Footer";

interface Show {
  id: number;
  name: string;
  image: { medium: string };
  rating: { average: number };
}

const ITEMS_PER_PAGE = 24;

export default function Home() {
  const [shows, setShows] = useState<Show[]>([]);
  const [filteredShows, setFilteredShows] = useState<Show[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const savedPage = localStorage.getItem("currentPage");
    if (savedPage) {
      setCurrentPage(Number(savedPage));
    }

    axios
      .get("https://api.tvmaze.com/shows")
      .then((response) => {
        setShows(response.data);
        setFilteredShows(response.data);
      })
      .catch((error) => {
        setError(error.message);
        console.error("Erro ao buscar séries:", error);
      });
  }, []);

  useEffect(() => {
    const filtered = shows.filter((show) =>
      show.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredShows(filtered);
    setCurrentPage(1);
  }, [searchTerm, shows]);

  const totalPages = Math.ceil(filteredShows.length / ITEMS_PER_PAGE);

  const displayedShows = filteredShows.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    localStorage.setItem("currentPage", page.toString());
  };

  return (
    <Container>
      <SearchContainer>
        <Title>🎬 Séries Recomendadas</Title>
        <SearchInput
          type="text"
          placeholder="Pesquisar séries..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchContainer>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {displayedShows.length === 0 ? (
  <p style={{ textAlign: "center", fontSize: "1.2rem", color: "#aaa" }}>
    🎭 Série não encontrada.
  </p>
) : (
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
)}
      {totalPages > 1 && (
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
            onClick={() =>
              handlePageChange(Math.min(currentPage + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Próxima
          </Button>
        </PaginationContainer>
      )}
      <Footer/>
    </Container>
  );
}
