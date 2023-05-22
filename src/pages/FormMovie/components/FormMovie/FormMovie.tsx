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
import GenrsList from "../GenrsList/GenrsList";
import StreamingPlatformList from "../StreamingPlatform/StreamingPlatformList";
import TagsList from "../Tags/TagsList";
import {
  ClassificationCatEnum,
  Director,
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

const rowClass = "grid md:grid-cols-2 md:gap-6 mt-5";
const inputSelecContainerClass = `w-2/12 mr-2`;

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
  const [writers, setWriters] = useState<Writer[]>([]);
  const [stars, setStars] = useState<Star[]>([]);
  const [directors, setDirectors] = useState<Director[]>([]);
  const [genres, setGenres] = useState(getGenres());
  const [releaseDate, setReleaseDate] = useState<Date>(new Date());
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
    setWriters(getWritters(searchValue));
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
    // setStreamingsMovie([]);
    setReleaseDate(new Date());
    setSynopsis("");
    // setStreamingPlatforms(params.streamingPlatforms);
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
      releaseDate: releaseDate,
      streamingsMovie: [],
      tags: [],
      tagInput: "",
      streamingPlatforms: params.streamingPlatforms,
    };
    console.log(
      "🚀 ~ file: FormMovie.tsx:158 ~ handleUpdateParams ~ updatedParams:",
      updatedParams
    );
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
      releaseDate: releaseDate,
      streamingsMovie: streamingsMovie,
      tags: tags,
      tagInput: "",
      // streamingPlatforms: params.streamingPlatforms,
    };

    console.log(
      "🚀 ~ file: FormMovie.tsx:235 ~ handleUpdateParams ~ streamingsMovie:",
      streamingsMovie
    );
    console.log(
      "🚀 ~ file: FormMovie.tsx:158 ~ handleUpdateParams ~ updatedParams:",
      updatedParams
    );
    setParams(updatedParams);
  };

  return (
    <>
      <div className="flex w-full items-center justify-center">
        <div className="flex w-full flex-col justify-center items-center ">
          <div className="flex justify-center items-stretch flex-col container mx-auto mt-5 mb-5 text-white">
            <form onSubmit={onSubmitHandlerEvent} className="">
              {/* Titulo */}
              <div className="relative z-0 w-full mb-1 group flex flex-row items-start justify-between">
                <InputText
                  type={"text"}
                  name={"title"}
                  id={"title"}
                  placeHolder={"Title Movie"}
                  required={true}
                  label={"Title"}
                  value={title}
                  setValue={setTitle}
                  classNameContainer={`w-full mt-0 flex flex-col items-start justify-start`}
                />
              </div>
              <div className="w-full my-8 flex">
                <div className="w-full">
                  <InputFile
                    label={"Poster"}
                    valueImage={poster}
                    setValueImage={setPoster}
                  />
                </div>
              </div>

              <div className="inline-flex items-center justify-center w-full">
                <span className="absolute px-3 font-medium  -translate-x-1/2  left-1/2 dark:text-white ">
                  Info
                </span>
                <hr className="w-full h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
              </div>

              {/* Synopsis */}
              <InputTextArea
                name="synopsis"
                value={synopsis}
                setValue={setSynopsis}
                label={"Synopsis"}
                id={"synopsis"}
                placeHolder={""}
              />
              <div className={rowClass}></div>
              {/* Genres */}
              <div className="flex items-center justify-center py-5 ">
                <GenrsList setGenres={setGenres} listGenrs={genres} />
              </div>
              <div className="flex flex-row w-full justify-between items-center py-1">
                {/* Languages */}
                <InputSelect
                  data={getLanguages()}
                  id={"language"}
                  label={"Original Language"}
                  key={"language"}
                  setValue={setLanguage}
                  value={language}
                  containerClass={inputSelecContainerClass}
                />
                {/* Clasifications */}
                <InputSelect
                  data={getClasifications()}
                  id={"clasifications"}
                  label={"Clasification"}
                  key={"clasifications"}
                  setValue={setClassification}
                  value={classification}
                  containerClass={inputSelecContainerClass}
                />
                <InputText
                  type="number"
                  numberValue={duration}
                  setNumberValue={setDuration}
                  label={"Duration"}
                  maxNumber={500}
                  placeHolder={""}
                  classNameContainer={`w-2/12 m-5 mt-7 flex flex-col items-start justify-end`}
                />

                <div
                  className={`w-auto flex justify-end items-end flex-col mx-2`}
                >
                  <div>
                    <InputDatePicker
                      label="Release Date"
                      setDateValue={setReleaseDate}
                      dateValue={releaseDate}
                    />
                  </div>
                </div>
              </div>
              <div id="container-search" className="flex py-5 flex-col">
                {/* Director */}
                <ContainerSearch
                  label="Directors"
                  listData={directorsData}
                  onSearchHandlerEvent={handlerSearchDirectors}
                  placeHolder={"Search Directores by name..."}
                  setListData={setDirectorsData}
                  handlerClickElement={handlerClickDirectorEvent}
                />
                {/* Writers */}
                <ContainerSearch
                  label="Writers"
                  listData={writersData}
                  setListData={setWritersData}
                  onSearchHandlerEvent={handlerSearchWritter}
                  placeHolder={"Search Writers by name..."}
                  handlerClickElement={handlerClickWritterEvent}
                />
                {/* Stars */}
                <ContainerSearch
                  label="Stars"
                  listData={starsData}
                  setListData={setStarsData}
                  onSearchHandlerEvent={handlerSearchStars}
                  placeHolder={"Search Stars by name..."}
                  handlerClickElement={handlerClickStarEvent}
                />
              </div>
              <div className="flex items-center justify-between py-5">
                <div className=" w-full justify-between items-center ">
                  <LabelSubtitle
                    textSize="text-lg"
                    subtitle="Where to Watch:"
                  />
                  <StreamingPlatformList
                    setListDataRender={setStreamingsMovie}
                    listDataRender={streamingsMovie}
                  />
                </div>
              </div>
              <LabelSubtitle textSize="text-lg" subtitle="Tags:" />
              <div className="flex flex-row h-full py-3">
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
                    "mx-2 w-1/6 bg-yellow-500 text-lg text-center text-white"
                  }
                />
                <Button
                  label="Cancel"
                  isPillStyle={true}
                  type={"button"}
                  onClickHandler={onResetHandlerEvent}
                  customClass={
                    "mx-2 w-1/6 bg-yellow-500 text-lg text-center text-white"
                  }
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormMovie;
