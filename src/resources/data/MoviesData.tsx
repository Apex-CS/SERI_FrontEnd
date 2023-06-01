import { Writer } from "../../types/types";
import { Star } from "../../types/types";
import {
  Director,
  GenreCat,
  Movies,
  StreamingPlatformsCat,
} from "../../types/types";
import { getRandomClassification, getRandomNumber } from "../../utils/utils";
import amazonLogo from "../img/logos-stream/amazon_prime_video.svg";
import netflixLogo from "../img/logos-stream/netflix.svg";
import disneyLogo from "../img/logos-stream/disney_plus.svg";
import appleLogo from "../img/logos-stream/apple_tv.svg";
import hboLogo from "../img/logos-stream/hbo-max.svg";
import youtubeLogo from "../img/logos-stream/youtube.svg";

const moviesListData: Movies[] = [
  {
    id: getRandomNumber(),
    poster:
      "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    title: "2001 Space Odessey",
    duration: getRandomNumber(240),
    release_date: new Date(),
    likes: getRandomNumber(1000),
    classification: getRandomClassification(),
    synopsis:
      "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Aunque no posee actualmente fuentes para justificar sus hipótesis, el profesor de filología clásica Richard McClintock asegura que su uso se remonta a los impresores de comienzos del siglo xvi.1​ Su uso en algunos editores de texto muy conocidos en la actualidad ha dado al texto lorem ipsum nueva popularidad.",
  },
  {
    id: getRandomNumber(),
    poster:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    title: "The Godfather",
    duration: getRandomNumber(240),
    release_date: new Date(),
    likes: getRandomNumber(1000),
    classification: getRandomClassification(),
    synopsis:
      "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Aunque no posee actualmente fuentes para justificar sus hipótesis, el profesor de filología clásica Richard McClintock asegura que su uso se remonta a los impresores de comienzos del siglo xvi.1​ Su uso en algunos editores de texto muy conocidos en la actualidad ha dado al texto lorem ipsum nueva popularidad.",
  },
  {
    id: getRandomNumber(),
    poster:
      "https://m.media-amazon.com/images/M/MV5BYmQyNTA1ZGItNjZjMi00NzFlLWEzMWEtNWMwN2Q2MjJhYzEyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg",
    title: "Apocalypse Now",
    duration: getRandomNumber(240),
    release_date: new Date(),
    likes: getRandomNumber(1000),
    classification: getRandomClassification(),
    synopsis:
      "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Aunque no posee actualmente fuentes para justificar sus hipótesis, el profesor de filología clásica Richard McClintock asegura que su uso se remonta a los impresores de comienzos del siglo xvi.1​ Su uso en algunos editores de texto muy conocidos en la actualidad ha dado al texto lorem ipsum nueva popularidad.",
  },
  {
    id: getRandomNumber(),
    poster:
      "https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    title: "Dr Strangelove",
    duration: getRandomNumber(240),
    release_date: new Date(),
    likes: getRandomNumber(1000),
    classification: getRandomClassification(),
    synopsis:
      "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Aunque no posee actualmente fuentes para justificar sus hipótesis, el profesor de filología clásica Richard McClintock asegura que su uso se remonta a los impresores de comienzos del siglo xvi.1​ Su uso en algunos editores de texto muy conocidos en la actualidad ha dado al texto lorem ipsum nueva popularidad.",
  },
  {
    id: getRandomNumber(),
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDI4MGEwZDAtZDg0Yy00MjFhLTg1MjctODdmZTMyNTUyNDI3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    title: "Paprika",
    duration: getRandomNumber(240),
    release_date: new Date(),
    likes: getRandomNumber(1000),
    classification: getRandomClassification(),
    synopsis:
      "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Aunque no posee actualmente fuentes para justificar sus hipótesis, el profesor de filología clásica Richard McClintock asegura que su uso se remonta a los impresores de comienzos del siglo xvi.1​ Su uso en algunos editores de texto muy conocidos en la actualidad ha dado al texto lorem ipsum nueva popularidad.",
  },
] as Movies[];

const GenrsListDataByMovieExample: GenreCat[] = [
  {
    id: 1,
    description: "Action",
  },
  {
    id: 5,
    description: "Romance",
  },
  {
    id: 6,
    description: "Science Fiction",
  },
];

const GenrsListData: GenreCat[] = [
  {
    id: 1,
    description: "Action",
  },
  {
    id: 2,
    description: "Comedy",
  },
  {
    id: 3,
    description: "Drama",
  },
  {
    id: 4,
    description: "Horror",
  },
  {
    id: 5,
    description: "Romance",
  },
  {
    id: 6,
    description: "Science Fiction",
  },
  {
    id: 7,
    description: "Fantasy",
  },
  {
    id: 8,
    description: "Thriller",
  },
];

const StreamingPlatformData: StreamingPlatformsCat[] = [
  {
    id: 1,
    name: "Amazon Prime Video",
    logo: amazonLogo,
  },
  {
    id: 2,
    name: "Netflix",
    logo: netflixLogo,
  },
  {
    id: 4,
    name: "HBO Max",
    logo: hboLogo,
  },
  {
    id: 5,
    name: "Apple TV",
    logo: appleLogo,
  },
  {
    id: 6,
    name: "Disney+",
    logo: disneyLogo,
  },
  {
    id: 7,
    name: "Paramount +",
    logo: "https://i.pcmag.com/imagery/reviews/07EMZy0mk05ABjFzwCJoiJF-1.fit_lim.size_240x136.v1614827656.png",
  },
  {
    id: 8,
    name: "Mubi",
    logo: "https://i.pcmag.com/imagery/reviews/04sGtBF8zsdHEUiPOPn2bAj-1.fit_lim.size_240x136.v1592856977.png",
  },
  {
    id: 9,
    name: "Youtube",
    logo: youtubeLogo,
  },
];

const TagsMovieExamples: string[] = [
  "Action",
  "Comedy",
  "Drama",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Thriller",
  "Western",
  "Crime thriller",
  "Disaster thriller",
  "Psychological thriller",
  "Techno thriller",
  "War and military action",
  "Spy and espionage action",
  "Martial arts action",
  "Western shoot ‘em up action",
  "Action hybrid genres",
  "Slapstick comedy",
  "Screwball comedy",
  "Parody comedy",
  "Black comedy",
  "Zombie horror",
  "Folk horror",
  "Body Horror",
  "Found footage Horror",
  "Science fantasy",
  "Cyberpunk",
  "Space Opera",
  "Spaghetti Westerns",
  "Space Westerns",
  "Singing cowboy Westerns",
  "Comedy Westerns",
  "Neo-westerns",
  "Acid Westerns",
  "Meat Pie Westerns",
  "Charro Westerns",
  "Dacoit Westerns",
  "Documentary Westerns",
  "Historical Romance",
  "Romantic Drama",
  "Romantic Comedy",
  "Chick Flick",
  "Paranormal Romance",
];

const MovieExample: Movies = {
  id: getRandomNumber(),
  poster: "https://i.ytimg.com/vi/peMX_zlIIA4/movieposter_en.jpg",
  title: "2001 Space Odessey",
  duration: getRandomNumber(240),
  release_date: new Date("1968-04-02"),
  likes: 999,
  classification: "C",
  originalLanguage: "English",
  createdBy: "Diego Campanero",
  createdDate: new Date(),
  synopsis:
    "La secuencia del filme inicia con la imagen de la Tierra ascendiendo sobre la Luna, mientras que el Sol asciende a su vez sobre la Tierra, todos en alineación. En este momento comienza a escucharse la composición musical Así habló Zaratustra, de Richard Strauss, la misma que acompaña, en su mayoría, la primera parte de la película, titulada El amanecer del hombre.",
};

const StreamingPlatformListByMovieExample: StreamingPlatformsCat[] = [
  {
    id: 1,
    name: "Amazon Prime Video",
    logo: "https://www.citypng.com/public/uploads/preview/-11596295514wdrm03x1ui.png",
  },
  {
    id: 3,
    name: "Netflix",
    logo: "https://w7.pngwing.com/pngs/153/31/png-transparent-netflix-macos-bigsur-icon.png",
  },
  {
    id: 4,
    name: "Start +",
    logo: "https://w7.pngwing.com/pngs/591/520/png-transparen…-india-television-show-television-channel-net.png",
  },
];

const DirectorsListExample: Director[] = [
  {
    id: 1,
    name: "Alfonso Cuarón",
  },
  {
    id: 2,
    name: "Quentin Tarantino",
  },
  {
    id: 3,
    name: "Martin Scorsese",
  },
  {
    id: 4,
    name: "Stanley Kubrick",
  },
  {
    id: 5,
    name: "Alfred Hitchcock",
  },

  {
    id: 6,
    name: "Guillermo del Toro",
  },
  {
    id: 7,
    name: "Alejandro González Iñárritu",
  },
  {
    id: 8,
    name: "Akira Kurosawa",
  },
  {
    id: 9,
    name: "Billy Wilder",
  },
  {
    id: 10,
    name: "Francis Ford Coppola",
  },
  {
    id: 11,
    name: "Woody Allen",
  },
  {
    id: 12,
    name: "Luis Buñuel",
  },
  {
    id: 13,
    name: "Pedro Almodóvar",
  },
];

const DirectorsSelectedListExample: Director[] = [
  {
    id: 4,
    name: "Stanley Kubrick",
  },
];

const WritersListExample: Writer[] = [
  {
    id: 1,
    name: "Robert McKee",
  },
  {
    id: 2,
    name: "Guillermo Arriaga Jordán",
  },
  {
    id: 3,
    name: "Syd Field",
  },
  {
    id: 4,
    name: "Nick Hornby",
  },
  {
    id: 5,
    name: "Billy Wilder",
  },
  {
    id: 6,
    name: "Charlie Kaufman",
  },
  {
    id: 7,
    name: "Tonino Guerra",
  },
  {
    id: 8,
    name: "Alfred Hitchcock",
  },
  {
    id: 9,
    name: "Woody Allen",
  },
  {
    id: 10,
    name: "Jean-Claude Carrière",
  },
  {
    id: 11,
    name: "Nora Ephron",
  },
  {
    id: 12,
    name: "Luis Alcoriza",
  },
];

const WritersSelectedListExample: Director[] = [
  {
    id: 3,
    name: "Syd Field",
  },
  {
    id: 9,
    name: "Woody Allen",
  },
  {
    id: 12,
    name: "Luis Alcoriza",
  },
];

const StarsListTemp: Star[] = [
  {
    name: "Tom Hanks",
    id: 1,
  },
  {
    name: "Samuel L. Jackson",
    id: 2,
  },
  {
    name: "Leonardo DiCaprio",
    id: 3,
  },
  {
    name: "Denzel Washington",
    id: 4,
  },
  {
    name: "Tom Cruise",
    id: 5,
  },
  {
    name: "Marlon Brando",
    id: 6,
  },
  {
    name: "Al Pacino",
    id: 7,
  },
  {
    name: "Joaquin Phoenix",
    id: 8,
  },
  {
    name: "Will Smith",
    id: 9,
  },
  {
    name: "Robert De Niro",
    id: 10,
  },
  {
    name: "Johnny Depp",
    id: 11,
  },
  {
    name: "Meryl Streep",
    id: 12,
  },
  {
    name: "Harrison Ford",
    id: 13,
  },
  {
    name: "Keanu Reeves",
    id: 14,
  },
  {
    name: "Jack Nicholson",
    id: 15,
  },
  {
    name: "Anthony Hopkins",
    id: 16,
  },
  {
    name: "Charlize Theron",
    id: 17,
  },
  {
    name: "Ryan Reynolds",
    id: 18,
  },
  {
    name: "Ben Affleck",
    id: 19,
  },
];

const StarsSelectedListExample: Director[] = [
  {
    name: "Leonardo DiCaprio",
    id: 3,
  },
  {
    name: "Tom Cruise",
    id: 5,
  },
  {
    name: "Joaquin Phoenix",
    id: 8,
  },
];

export {
  GenrsListData,
  moviesListData,
  StreamingPlatformData,
  TagsMovieExamples,
  MovieExample,
  StreamingPlatformListByMovieExample,
  WritersListExample,
  GenrsListDataByMovieExample,
  DirectorsListExample,
  StarsListTemp,
  DirectorsSelectedListExample,
  WritersSelectedListExample,
  StarsSelectedListExample,
};
