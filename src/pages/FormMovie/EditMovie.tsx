/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Loader } from "../../components";
import {
  GenrsListData,
  GenrsListDataByMovieExample,
  MovieExample,
  StreamingPlatformData,
  StreamingPlatformListByMovieExample,
  DirectorsSelectedListExample,
  WritersSelectedListExample,
  StarsSelectedListExample,
} from "../../resources/data/MoviesData";
import { Movies, StreamingPlatformsCat, GenreCat } from "../../types/types";
import { getRandomNumber, handlerPosterValue } from "../../utils/utils";
import { useParams } from "react-router-dom";
import { ParamsContext, ParamsType } from "./context/FormContext";
import FormMovie from "./components/FormMovie/FormMovie";

function EditMovie() {
  let { movieId } = useParams();
  const [movieLoadingFlag, setMovieLoadingFlag] = useState(false);
  const [streamingPlatforms, setStreamingPlatforms] = useState<
    StreamingPlatformsCat[]
  >([]);
  const getStreamingPlatforms = () => {
    return StreamingPlatformData;
  };

  const postTag = (newTagValue: string): string => {
    return newTagValue;
  };

  const getMoviesHosted = (idMovie: string) => {
    const responseMovieHosted: StreamingPlatformsCat[] =
      StreamingPlatformListByMovieExample;
    return responseMovieHosted;
  };

  const onSubmitHandler = () => {
    const formData: Movies = {
      id: getRandomNumber(1000),
      title: params.title.toString(),
      createdDate: new Date(),
      duration: params.duration,
      release_date: params.releasedDate,
      originalLanguage: params.language,
      classification: params.classification,
      synopsis: params.synopsis,
      createdBy: "",
      likes: 0,
      poster: handlerPosterValue(params.poster),
    };
    console.log(
      "🚀 ~ file: EditMovie.tsx:145 ~ onSubmitHandler ~ formData:",
      formData
    );
    params.tags.forEach((tagItem) => {
      postTag(tagItem);
    });

    params.genres.forEach((genrItem) => {
      if (genrItem.selected) {
        console.log(
          "🚀 ~ file: EditMovie.tsx:151 ~ onSubmitHandler ~ genrItem CallAPI:",
          genrItem
        );
      }
    });

    streamingPlatforms.forEach((streamItem) => {
      if (streamItem.select) {
        console.log("CALL API streamItem", streamItem);
      }
    });

    params.directors.forEach((directorItem) => {
      console.log(
        "🚀 ~ file: EditMovie.tsx:173 ~ directors.forEach ~ directorItem:",
        directorItem
      );
    });

    params.writers.forEach((writerItem) => {
      console.log(
        "🚀 ~ file: EditMovie.tsx:177 ~ writers.forEach ~ writerItem:",
        writerItem
      );
    });

    params.stars.forEach((StarItem) => {
      console.log(
        "🚀 ~ file: EditMovie.tsx:181 ~ stars.forEach ~ StarItem:",
        StarItem
      );
    });
  };

  const getMovieInfoFromID = () => {
    const responseMovie: Movies = MovieExample;
    return responseMovie;
  };

  const getTagsByMovie = () => {
    const tagsResponse = [
      "Foreign",
      "Written-directed",
      "Enjoyable",
      "Brilliant",
      "Emotional",
      "Well-acted",
      "Moving",
      "Insightful",
      "Beautiful",
      "Dramatic",
      "Powerful",
      "Absorbing",
      "Family",
      "Intense",
      "Character-driven",
      "Touching",
      "Mysterious",
      "Teenagers",
      "Challenging",
      "LGBT",
      "Fun",
      "Based on a book",
      "Thrilling",
      "Violent",
      "Dark",
    ];
    return tagsResponse;
  };

  const getGenresByMovie = () => {
    const genrsAPIData = GenrsListDataByMovieExample.map((item) => {
      item.selected = false;
      return item;
    });
    const tempAPIArray: GenreCat[] = [];
    GenrsListData.map((itemGenrRenderItem) => {
      if (genrsAPIData.find((e) => e.id === itemGenrRenderItem.id)) {
        tempAPIArray.push(itemGenrRenderItem);
      }
    });
    console.log(
      "🚀 ~ file: EditMovie.tsx:246 ~ tempAPIArray ~ tempAPIArray:",
      tempAPIArray
    );
    return tempAPIArray;
  };

  const getStreamPlatformByMovie = () => {
    const streamPlatforms: StreamingPlatformsCat[] = getMoviesHosted(
      movieId ? movieId : "0"
    );
    streamPlatforms.forEach((streamItem) => (streamItem.select = false));
    const tempStreamingPlatformOriginal = getStreamingPlatforms().map(
      (itemStream) => {
        if (streamPlatforms.find((e) => e.id === itemStream.id)) {
          itemStream.select = true;
        } else {
          itemStream.select = false;
        }
        return itemStream;
      }
    );
    setStreamingPlatforms(tempStreamingPlatformOriginal);
  };

  const updateParams = (newParams: ParamsType) => {
    console.log(
      "🚀 ~ file: AddNewMovie.tsx:350 ~ updateParams ~ newParams:",
      newParams
    );
    setParams(newParams);
  };

  const [params, setParams] = useState<ParamsType>({} as ParamsType);

  useEffect(() => {
    setTimeout(() => {
      const movie = getMovieInfoFromID();
      getTagsByMovie();
      getGenresByMovie();
      getStreamPlatformByMovie();

      const movieFirstRender = {
        title: movie?.title + "",
        poster: movie?.poster + "",
        classification: movie.classification + "",
        genres: getGenresByMovie(),
        duration: movie?.duration + 0,
        synopsis: movie?.synopsis + "",
        language: movie?.originalLanguage + "",
        writers: WritersSelectedListExample,
        stars: StarsSelectedListExample,
        directors: DirectorsSelectedListExample,
        releasedDate: movie?.release_date ? movie?.release_date : new Date(),
        streamingsMovie: [],
        tags: getTagsByMovie(),
        onSubmitHandler,
      };
      console.log(
        "🚀 ~ file: EditMovie.tsx:411 ~ useEffect ~ movieFirstRender:",
        movieFirstRender
      );
      setParams(movieFirstRender);
      setMovieLoadingFlag(true);
    }, 5000);
  }, []); // first render

  return (
    <div className="flex justify-center items-stretch flex-col container w-full mx-auto mt-5 mb-5 px-4 text-white">
      {movieLoadingFlag ? (
        <ParamsContext.Provider value={{ params, setParams: updateParams }}>
          {/* Render the child component */}
          <FormMovie onSubmitHandler={onSubmitHandler} />
        </ParamsContext.Provider>
      ) : (
        <div className="flex mt-16 justify-center items-center container">
          <Loader />
        </div>
      )}
    </div>
  );
}

export default EditMovie;
