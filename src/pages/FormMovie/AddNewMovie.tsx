/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  DirectorsListExample,
  GenrsListData,
  StarsListTemp,
  StreamingPlatformData,
  WritersListExample,
} from "../../resources/data/MoviesData";
import {
  ClassificationCatEnum,
  Movies,
  LanguageEnum,
  Director,
  Star,
  Writer,
  StreamingPlatformsCat,
  GenreCat,
} from "../../types/types";
import { getRandomNumber, handlerPosterValue } from "../../utils/utils";
import FormMovie from "./components/FormMovie/FormMovie";
import { ParamsContext, ParamsType } from "./context/FormContext";

function AddNewMovie() {
  const [poster, setPoster] = React.useState<File | string>("");
  const [classification, setClassification] = React.useState<string>("");
  const [classificationData, setClassificationData] = React.useState<string[]>([
    "",
  ]);
  const [genres, setGenres] = React.useState<GenreCat[]>([]);
  const [duration, setDuration] = React.useState<number>(1);
  const [synopsis, setSynopsis] = React.useState<string>("");
  const [language, setLanguage] = React.useState<string>("");

  const [streamingPlatforms, setStreamingPlatforms] = React.useState<
    StreamingPlatformsCat[]
  >([]);

  const [tags, setTags] = React.useState<string[]>([]);
  const [tagInput, setTagInput] = React.useState<string>("");

  const getDirector = (directoValueSearch: string) => {
    const responseDirectorsAPI: Director[] = DirectorsListExample;
    return responseDirectorsAPI;
  };
  const getStars = (startValueSearch: string) => {
    const responseStarsAPI: Star[] = StarsListTemp;
    return responseStarsAPI;
  };
  const getWritters = (writterValueSearch: string) => {
    const responseWrittersAPI: Writer[] = WritersListExample;
    return responseWrittersAPI;
  };
  const getLanguages = () => {
    const languagesData = Object.values(LanguageEnum) as string[];
    return languagesData;
  };
  const getGenres = () => {
    return GenrsListData;
  };
  const getStreamingPlatforms = () => {
    return StreamingPlatformData;
  };
  const getClasifications = () => {
    return Object.values(ClassificationCatEnum) as string[];
  };
  const getTags = (tagValueSearch: string): string[] => {
    return [""];
  };

  const postTag = (newTagValue: string): string => {
    console.log(
      "🚀 ~ file: AddNewMovie.tsx:62 ~ postTag ~ newTagValue:",
      newTagValue
    );
    return newTagValue;
  };

  const removeTagFromList = (indexProp: number) =>
    setTags((current) => current.filter((tag, index) => index !== indexProp));

  const getMoviesHosted = (idMovie: number | string) => {
    const responseMovieHosted: StreamingPlatformsCat[] = [];
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
  };

  const genrsListDataRef = React.useRef<GenreCat[]>();

  useEffect(() => {
    setGenres(getGenres());
    genrsListDataRef.current = getGenres();
  }, []);

  const updateParams = (newParams: ParamsType) => {
    console.log(
      "🚀 ~ file: AddNewMovie.tsx:350 ~ updateParams ~ newParams:",
      newParams
    );
    setParams(newParams);
  };

  const [params, setParams] = useState<ParamsType>({} as ParamsType);

  useEffect(() => {
    const movieFirstRender = {
      title: "",
      poster,
      languages: getLanguages(),
      classification,
      classificationData: getClasifications(),
      genres: getGenres(),
      duration,
      synopsis,
      language,
      tags,
      tagInput,
      streamingPlatforms: getStreamingPlatforms(),
      getDirector,
      getStars,
      getWritters,
      onSubmitHandler,
    };
    setParams(movieFirstRender);
  }, []); // first render

  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex w-full flex-col justify-center items-center ">
        <ParamsContext.Provider value={{ params, setParams: updateParams }}>
          {/* Render the child component */}
          <FormMovie onSubmitHandler={onSubmitHandler} />
        </ParamsContext.Provider>
      </div>
    </div>
  );
}

export default AddNewMovie;
