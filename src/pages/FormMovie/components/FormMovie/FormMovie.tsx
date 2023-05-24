import { useContext, useState } from "react";
import {
  Button,
  InputFile,
  InputSelect,
  InputText,
  InputTextArea,
  LabelSubtitle,
} from "../../../../components";
import ContainerSearch from "../ContainerSearch/ContainerSearch";
import StreamingPlatformList from "../StreamingPlatform/StreamingPlatformList";
import TagsList from "../Tags/TagsList";
import {
  ClassificationCatEnum,
  Director,
  GenreCat,
  LanguageEnum,
  Star,
  StreamingPlatformsCat,
  Writer,
} from "../../../../types/types";
import InputDatePicker from "../../../../components/Inputs/InputDatePicker/InputDatePicker";
import { ParamsContext } from "../../context/FormContext";
import {
  DirectorsListExample,
  GenrsListData,
  StarsListTemp,
  StreamingPlatformData,
  WritersListExample,
} from "../../../../resources/data/MoviesData";
import ContainerSearchGenres from "../ContainerSearch/ContainerSearchGenra";
import "./FormMovie.css";

const rowClass = "grid md:grid-cols-2 md:gap-6 mt-5";
const titleColoDefault = "text-yellow-500 mb-2";
interface FormMoviePropst {
  onSubmitHandler: () => void;
}

const FormMovie = ({ onSubmitHandler }: FormMoviePropst) => {
  const getGenres = () => {
    return GenrsListData;
  };

  const getStreamingPlatforms = () => {
    return StreamingPlatformData;
  };

  const [poster, setPoster] = useState<File | string>("");
  const [title, setTitle] = useState<string>("");
  const [classification, setClassification] = useState<string>("");
  const [duration, setDuration] = useState<number>(1);
  const [synopsis, setSynopsis] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [directorsData, setDirectorsData] = useState<Director[]>([]);
  const [writersData, setWritersData] = useState<Writer[]>([]);
  const [starsData, setStarsData] = useState<Star[]>([]);
  const [genresData, setGenresData] = useState<GenreCat[]>([]);
  const [writers, setWriters] = useState<Writer[]>([]);
  const [stars, setStars] = useState<Star[]>([]);
  const [directors, setDirectors] = useState<Director[]>([]);
  const [genres, setGenres] = useState<GenreCat[]>([]);
  const [releasedDate, setReleasedDate] = useState<Date>(new Date());
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState<string>("");
  const [streamingsMovie, setStreamingsMovie] = useState<
    StreamingPlatformsCat[]
  >(getStreamingPlatforms());

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

  const getClasifications = () => {
    return Object.values(ClassificationCatEnum) as string[];
  };

  const handlerSearchDirectors = (searchValue: string) => {
    /**
     * Call API to search some list  of related values
     * with the searchValue:string
     * and return a array of elements
     */
    setDirectorsData(getDirector(searchValue));
  };

  const handlerSearchStars = (searchValue: string) => {
    /**
     * Call API to search some list  of related values
     * with the searchValue:string
     * and return a array of elements
     */
    setStarsData(getStars(searchValue));
  };

  const handlerSearchGenres = (searchValue: string) => {
    /**
     * Call API to search some list  of related values
     * with the searchValue:string
     * and return a array of elements
     */
    setGenresData(getGenres());
  };

  const handlerSearchWritter = (searchValue: string) => {
    console.log(
      "🚀 ~ file: AddNewMovie.tsx:80 ~ handlerSearchWritter ~ searchValue:",
      searchValue
    );
    /**
     * Call API to search some list  of related values
     * with the searchValue:string
     * and return a array of elements
     */
    setWritersData(getWritters(searchValue));
  };

  const handlerClickGenrEvent = (genre: GenreCat) => {
    console.log(
      "🚀 ~ file: EditMovie.tsx:103 ~ handlerClickStarEvent ~ Star:",
      genre
    );
    setGenres((prevArray) => {
      prevArray.push(genre);
      return prevArray;
    });
  };

  const handlerClickStarEvent = (star: Star) => {
    console.log(
      "🚀 ~ file: EditMovie.tsx:103 ~ handlerClickStarEvent ~ Star:",
      star
    );
    setStars((prevArray) => {
      prevArray.push(star);
      return prevArray;
    });
  };

  const handlerClickWritterEvent = (writter: Writer) => {
    console.log(
      "🚀 ~ file: EditMovie.tsx:106 ~ handlerClickWritterEvent ~ writter:",
      writter
    );
    setWriters((prevArray) => {
      prevArray.push(writter);
      return prevArray;
    });
  };

  const handlerClickDirectorEvent = (director: Director) => {
    setDirectors((prevArray) => {
      prevArray.push(director);
      return prevArray;
    });
  };

  const onsubmitTag = () => {
    setTags([...tags, tagInput.toString()]);
    tags?.push(tagInput + "");
    setTagInput("");
  };

  const removeTagFromList = (indexProp: number) =>
    setTags((current) => current.filter((tag, index) => index !== indexProp));

  const onSubmitHandlerEvent = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleUpdateParams();
    onSubmitHandler();
  };

  const onResetHandlerEvent = () => {
    // clean all the elements in the form
    setTitle("");
    setTags([]);
    setTagInput("");
    setClassification("");
    setLanguage("");
    setDuration(0);
    setReleasedDate(new Date());
    setStreamingsMovie(getStreamingPlatforms());
    setSynopsis("");
    setPoster("");
    const updatedParams = {
      title: title,
      poster: poster,
      languages: params.languages,
      classification: classification,
      classificationData: params.classificationData,
      genres: params.genres,
      duration: 1,
      synopsis: synopsis,
      language: language,
      directorsData: params.directorsData,
      writersData: params.writersData,
      starsData: params.starsData,
      writers: writers,
      stars: stars,
      directors: directors,
      releasedDate: releasedDate,
      streamingsMovie: [],
      tags: [],
      tagInput: "",
      streamingPlatforms: params.streamingPlatforms,
    };
    setParams(updatedParams);
  };

  const { params, setParams } = useContext(ParamsContext);

  const handleUpdateParams = () => {
    const updatedParams = {
      title: title,
      poster: poster,
      languages: params.languages,
      classification: classification,
      classificationData: params.classificationData,
      genres: genres,
      duration: 0,
      synopsis: synopsis,
      language: language,
      directorsData: params.directorsData,
      writersData: params.writersData,
      starsData: params.starsData,
      writers: writers,
      stars: stars,
      directors: directors,
      releasedDate: releasedDate,
      streamingsMovie: streamingsMovie,
      tags: tags,
      tagInput: "",
    };

    setParams(updatedParams);
  };

  return (
    <>
      <div className="flex w-full items-center justify-center">
        <div className="flex w-full flex-col justify-center items-center ">
          <div className="flex justify-center items-stretch flex-col container mx-auto mt-5 mb-5 text-white">
            <form onSubmit={onSubmitHandlerEvent} className="">
              <div className="flex flex-row justify-between mb-10">
                {/* Titulo */}
                <div className="relative z-0 w-2/4 mb-0 group flex flex-row items-start justify-between">
                  <InputText
                    type={"text"}
                    name={"title"}
                    id={"title"}
                    placeHolder={"Title Movie"}
                    required={true}
                    label={"Title"}
                    value={title}
                    setValue={setTitle}
                    customClassLabel={titleColoDefault}
                    classNameContainer={`w-full mt-0 flex mr-5 flex-col items-start justify-start`}
                  />
                </div>
                <div className="w-2/4 ml-14 flex">
                  <div className="w-full">
                    <InputFile
                      label={"Poster"}
                      valueImage={poster}
                      setValueImage={setPoster}
                      customClassLabel={titleColoDefault}
                    />
                  </div>
                </div>
              </div>

              {/* Synopsis */}
              <InputTextArea
                name="synopsis"
                value={synopsis}
                setValue={setSynopsis}
                label={"Synopsis"}
                id={"synopsis"}
                placeHolder={""}
                customClassLabel={titleColoDefault}
              />
              <div className={rowClass}></div>
              <div className="flex flex-row w-full justify-between items-center py-1">
                {/* Languages */}
                <InputSelect
                  data={getLanguages()}
                  id={"language"}
                  label={"Original Language"}
                  key={"language"}
                  setValue={setLanguage}
                  value={language}
                  customClassLabel={titleColoDefault}
                  containerClass={`w-3/12 mr-5`}
                />
                {/* Clasifications */}
                <InputSelect
                  customClassLabel={titleColoDefault}
                  data={getClasifications()}
                  id={"clasifications"}
                  label={"Clasification"}
                  key={"clasifications"}
                  setValue={setClassification}
                  value={classification}
                  containerClass={`w-3/12 mr-6`}
                />
                <InputText
                  type="number"
                  numberValue={duration}
                  setNumberValue={setDuration}
                  label={"Duration"}
                  maxNumber={500}
                  customClassLabel={`text-yellow-500 mb-2`}
                  placeHolder={""}
                  classNameContainer={`w-3/12 ml-10 mr-5 flex flex-col items-start justify-end`}
                />

                <div
                  className={`w-3/12 flex justify-center items-center flex-col ml-1`}
                >
                  <InputDatePicker
                    label="Released Date"
                    setDateValue={setReleasedDate}
                    dateValue={releasedDate}
                  />
                </div>
              </div>
              <div id="container-search" className="flex py-5 flex-col">
                <div className="w'full flex flex-row">
                  {/* Director */}
                  <ContainerSearch
                    label="Directors"
                    listData={directorsData}
                    onSearchHandlerEvent={handlerSearchDirectors}
                    placeHolder={"Search Directores by name..."}
                    setListData={setDirectorsData}
                    handlerClickElement={handlerClickDirectorEvent}
                    classNameContainer="mr-8"
                  />
                  {/* Writers */}
                  <ContainerSearch
                    label="Writers"
                    listData={writersData}
                    setListData={setWritersData}
                    onSearchHandlerEvent={handlerSearchWritter}
                    placeHolder={"Search Writers by name..."}
                    handlerClickElement={handlerClickWritterEvent}
                    classNameContainer="ml-8"
                  />
                </div>

                <div className="w'full flex flex-row">
                  {/* Stars */}
                  <ContainerSearch
                    label="Stars"
                    listData={starsData}
                    setListData={setStarsData}
                    onSearchHandlerEvent={handlerSearchStars}
                    placeHolder={"Search Stars by name..."}
                    handlerClickElement={handlerClickStarEvent}
                    classNameContainer="mr-8"
                  />
                  {/* Genres */}
                  <ContainerSearchGenres
                    label="Genres"
                    listData={genresData}
                    setListData={setGenresData}
                    onSearchHandlerEvent={handlerSearchGenres}
                    placeHolder={"Search Stars by name..."}
                    handlerClickElement={handlerClickGenrEvent}
                    classNameContainer="ml-8"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between py-5 mb-10">
                <div className=" w-full justify-between items-center ">
                  <LabelSubtitle
                    textSize="text-lg"
                    customClass={titleColoDefault}
                    subtitle="Where to Watch"
                  />
                  <StreamingPlatformList
                    setListDataRender={setStreamingsMovie}
                    listDataRender={streamingsMovie}
                  />
                </div>
              </div>
              <LabelSubtitle
                textSize="text-lg"
                customClass={titleColoDefault}
                subtitle="Tags"
              />
              <div className="flex flex-row h-full py-0">
                <InputText
                  label=""
                  value={tagInput}
                  setValue={setTagInput}
                  onSubmitEvent={onsubmitTag}
                />
                <TagsList
                  onClickRemoveTag={removeTagFromList}
                  tagsList={tags}
                />
              </div>
              <div
                id="buttons-container"
                className="flex w-full items-center justify-around my-6"
              >
                <Button
                  label="Save"
                  isPillStyle={true}
                  type={"submit"}
                  customClass={
                    "mx-2 w-4/12 bg-yellow-500 text-3xl text-center text-white"
                  }
                />
                {/* <Button
                  label="Cancel"
                  isPillStyle={true}
                  type={"button"}
                  onClickHandler={onResetHandlerEvent}
                  customClass={
                    "mx-2 w-1/6 bg-yellow-500 text-lg text-center text-white"
                  }
                /> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormMovie;
