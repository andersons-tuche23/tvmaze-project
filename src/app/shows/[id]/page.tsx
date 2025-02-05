"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import {
  Container,
  Title,
  ShowImage,
  Summary,
  Genres,
  Rating,
  ErrorMessage,
  InfoContainer,
  HeartIcon,
  FollowText,
  AdditionalInfo,
  LinkButton,
} from "./styles";

interface ShowDetail {
  name: string;
  image: { medium: string };
  summary: string;
  genres: string[];
  rating: { average: number };
  premiered: string;
  status: string;
  averageRuntime: number;
  network: { name: string; officialSite: string };
  url: string;
}

export default function ShowDetailPage() {
  const { id } = useParams();
  const [show, setShow] = useState<ShowDetail | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://api.tvmaze.com/shows/${id}`)
        .then((response) => {
          setShow(response.data);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [id]);

  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  return (
    <Container>
      {show ? (
        <>
          <Title>{show.name}</Title>
          <InfoContainer>
            <ShowImage src={show.image?.medium} alt={show.name} />
            <div>
              <Summary>{show.summary}</Summary>
              <Genres>Gêneros: {show.genres.join(", ")}</Genres>
              <Rating>⭐ Avaliação: {show.rating?.average || "N/A"}</Rating>
              <AdditionalInfo>
                <p>
                  <strong>Data de Estreia:</strong> {show.premiered}
                </p>
                <p>
                  <strong>Status:</strong> {show.status}
                </p>
                <p>
                  <strong>Duração do Episódio:</strong> {show.averageRuntime}{" "}
                  minutos
                </p>
                <p>
                  <strong>Canal/Plataforma:</strong> {show.network?.name}
                </p>
              </AdditionalInfo>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <HeartIcon />
                <FollowText>Follow</FollowText>
              </div>
              <LinkButton href={show.url} target="_blank">
                Visitar Página Oficial
              </LinkButton>
            </div>
          </InfoContainer>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </Container>
  );
}
