import { Movies } from "../../types/types";
const MAX_NUMBER_ID = 99999999;
const setIDMovie = () => {
  return Math.round(Math.random() * MAX_NUMBER_ID);
};

const carrouselData: Movies[] = [
  {
    title: "Everything Everywhere All at Once ",
    likes: Math.round(Math.random() * 100),
    id: setIDMovie(),
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDE1NzMzZDEtYzE4OS00MTRjLTg4NmUtMDcyMGM3ZGMwY2VlXkEyXkFqcGdeQXVyNjM0MTI4Mw@@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "The Super Mario Bros. Movie",
    likes: Math.round(Math.random() * 100),
    id: setIDMovie(),
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Missing",
    likes: Math.round(Math.random() * 100),
    id: setIDMovie(),
    poster:
      "https://m.media-amazon.com/images/M/MV5BNWExMzg3NjAtZmZmYy00MWE3LWJkNjEtOTYzYTZjYTZkMjZiXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Palm Trees and Power Lines",
    likes: Math.round(Math.random() * 100),
    id: setIDMovie(),
    poster:
      "https://m.media-amazon.com/images/M/MV5BNmQ3OTZlYzktNzQ3YS00ODViLTkwYTAtYjdmYTZkZmE2NmUzXkEyXkFqcGdeQXVyNjA3NTEwODY@._V1_.jpg",
  },
  {
    title: "The Whale",
    likes: Math.round(Math.random() * 100),
    id: setIDMovie(),
    poster:
      "https://m.media-amazon.com/images/M/MV5BZDQ4Njg4YTctNGZkYi00NWU1LWI4OTYtNmNjOWMyMjI1NWYzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "This Is Where I Leave You",
    likes: Math.round(Math.random() * 100),
    id: setIDMovie(),
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjkzNzQ2NDMyNl5BMl5BanBnXkFtZTgwMTY3MTcxMjE@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Triangle of Sadness",
    likes: Math.round(Math.random() * 100),
    id: setIDMovie(),
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDRiZjc0ZDMtMjhlYi00ZjAzLTg0MDQtZDI2NGEyYTBlN2M2XkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "All That Breathes",
    likes: Math.round(Math.random() * 100),
    id: setIDMovie(),
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzQxMGNhZmUtODllYi00Yjk4LTgyM2YtMTJhZTIyZTk0YmEwXkEyXkFqcGdeQXVyMjMyMzI4MzY@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "The Banshees of Inisherin",
    likes: Math.round(Math.random() * 100),
    id: setIDMovie(),
    poster:
      "https://m.media-amazon.com/images/M/MV5BM2NlZDI0ZDktNTg5OS00ZjQ1LWI4MDEtN2I0MDE5NWRiNzA4XkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_.jpg",
  },
] as Movies[];

const listDataTop10MoviesTemp: Movies[] = [
  {
    title: "Chris Rock: Selective Outrage",
    likes: Math.round(Math.random() * 100),
    id: setIDMovie(),
  },
  {
    title:
      "Everything Everywhere All at Once Everything Everywhere All at Once",
    likes: Math.round(Math.random() * 100),
    id: setIDMovie(),
  },
  {
    title: "Missing",
    likes: Math.round(Math.random() * 100),
    id: setIDMovie(),
  },
  {
    title: "Palm Trees and Power Lines",
    likes: Math.round(Math.random() * 100),
    id: setIDMovie(),
  },
  {
    title: "The Whale",
    likes: Math.round(Math.random() * 100),
    id: setIDMovie(),
  },
  {
    title: "This Is Where I Leave You",
    likes: Math.round(Math.random() * 100),
    id: setIDMovie(),
  },
  {
    title: "Triangle of Sadness",
    likes: Math.round(Math.random() * 100),
    id: setIDMovie(),
  },
  {
    title: "All That Breathes",
    likes: Math.round(Math.random() * 100),
    id: setIDMovie(),
  },
  {
    title: "A Man Called Otto",
    likes: Math.round(Math.random() * 100),
    id: setIDMovie(),
  },
  {
    title: "The Banshees of Inisherin",
    likes: Math.round(Math.random() * 100),
    id: setIDMovie(),
  },
] as Movies[];

const listDataTop10ComingTheatersTemp: Movies[] = [
  {
    title: "Chris Rock: Selective Outrage",
    likes: Math.round(Math.random() * 100),
    id: setIDMovie(),
  },
  {
    title: "Everything Everywhere All at Once",
    likes: Math.round(Math.random() * 100),
    id: setIDMovie(),
  },
  {
    title: "Missing",
    likes: Math.round(Math.random() * 100),
    id: setIDMovie(),
  },
  {
    title: "Palm Trees and Power Lines",
    likes: Math.round(Math.random() * 100),
    id: setIDMovie(),
  },
  {
    title: "The Whale",
    likes: Math.round(Math.random() * 100),
    id: setIDMovie(),
  },
  {
    title: "This Is Where I Leave You",
    likes: Math.round(Math.random() * 100),
    id: setIDMovie(),
  },
  {
    title: "Triangle of Sadness",
    likes: Math.round(Math.random() * 100),
    id: setIDMovie(),
  },
  {
    title: "All That Breathes",
    likes: Math.round(Math.random() * 100),
    id: setIDMovie(),
  },
  {
    title: "A Man Called Otto",
    likes: Math.round(Math.random() * 100),
    id: setIDMovie(),
  },
  {
    title: "The Banshees of Inisherin",
    likes: Math.round(Math.random() * 100),
    id: setIDMovie(),
  },
] as Movies[];

export {
  carrouselData,
  listDataTop10ComingTheatersTemp,
  listDataTop10MoviesTemp,
};
