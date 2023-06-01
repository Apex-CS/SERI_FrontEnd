/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { ClassificationCatEnum, Movies } from "../../types/types";
import { getRandomNumber, handlerPosterValue } from "../../utils/utils";
import FormMovie from "./components/FormMovie/FormMovie";
import { ParamsContext, ParamsType } from "./context/FormContext";

function AddNewMovie() {
  const getClasifications = () => {
    return Object.values(ClassificationCatEnum) as string[];
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
      "🚀 ~ file: AddNewMovie.tsx:101 ~ onSubmitHandler ~ formData:",
      formData
    );
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
    const movieFirstRender = {
      title: "",
      poster: "",
      classification: "",
      classificationData: getClasifications(),
      genres: [],
      duration: 0,
      synopsis: "",
      language: "",
      writers: [],
      stars: [],
      directors: [],
      releasedDate: new Date(),
      streamingsMovie: [],
      tags: [],
      onSubmitHandler,
    };
    console.log(
      "🚀 ~ file: AddNewMovie.tsx:141 ~ useEffect ~ movieFirstRender:",
      movieFirstRender
    );
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
