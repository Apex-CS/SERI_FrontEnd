import { Movies } from "../../../types/types";
import ActionItem from "./ActionItem";
import { Like } from "../../../resources/svg/MoviesIcons";
import { LabelSubtitle } from "../../../components";
import { formatTime } from "../../../utils/utils";
import { Link } from "react-router-dom";

interface MovieItemProps {
  item: Movies;
}

const classListInfoDefault = `flex flex-row items-center  w-96`;
const classInfoDataList = `text-gray-500 mt-1`;
const classContainer = `flex flex-col w-full items-center bg-white border border-gray-200 rounded-lg my-4 shadow md:flex-row 
dark:border-gray-700 dark:bg-gray-800 `;
function MovieItem({ item }: MovieItemProps) {
  const urlMovieView = `/movie/movieId:${item.id}`;

  return (
    <div className={classContainer}>
      <Link to={urlMovieView}>
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-60 md:rounded-none md:rounded-l-lg focus:"
          src={item.poster}
          alt=""
        />
      </Link>
      <div className="flex flex-row justify-between w-full p-4 leading-normal 2xl:w-full xl:w-full lg:w-4/6  2xl:justify-between xl:justify-between lg:justify-between">
        <div className="flex flex-col my-auto h-full lg:w-6/12">
          <Link to={urlMovieView}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight w- text-yellow-400  ">
              {item.title}
            </h5>
          </Link>

          <ol className="max-w-md space-y-1 text-gray-500 mt- list-none list-inside dark:text-gray-400">
            <li className={classListInfoDefault}>
              <LabelSubtitle
                textSize="text-xl"
                customClass="text-white mr-4 h-full"
                subtitle="Duration: "
              />
              <LabelSubtitle
                textSize="text-lg"
                customClass={classInfoDataList}
                subtitle={formatTime(item.duration)}
              />
            </li>
            <li className={classListInfoDefault}>
              <LabelSubtitle
                textSize="text-xl"
                customClass="text-white mr-4"
                subtitle="Clasification: "
              />
              <LabelSubtitle
                textSize="text-lg"
                customClass={classInfoDataList}
                subtitle={item.classification + ""}
              />
            </li>
            <li className={classListInfoDefault}>
              <LabelSubtitle
                textSize="text-xl"
                customClass="text-white mr-4"
                subtitle="Genre: "
              />
              <LabelSubtitle
                textSize="text-lg"
                customClass={classInfoDataList}
                subtitle={"Drama, Horror"}
              />
            </li>
            <li className={classListInfoDefault}>
              <LabelSubtitle
                textSize="text-xl"
                customClass="text-white mr-4"
                subtitle="Release Date: "
              />
              <LabelSubtitle
                textSize="text-lg"
                customClass={classInfoDataList}
                subtitle={item.release_date?.toDateString() + ""}
              />
            </li>
          </ol>
          <div className="flex items-center w-full justify-start mt-5">
            <div className="flex items-center mr-10 justify-center ">
              <Like width={32} height={32} color="#E1AE2A" />
              <span className="bg-blue-100 text-blue-800 flex items-center justify-center text-lg font-semibold mr-2 px-2.5 py-0.5 w-10 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {item.likes}
              </span>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex-shrink-0 rotate-180 w-6">
                <Like width={32} height={32} color="#C70039" />
              </div>
              <span className="bg-blue-100 text-blue-800 flex items-center justify-center text-lg font-semibold mr-2 px-2.5 py-0.5 w-10 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {item.likes}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end items-end 2xl:justify-end xl:justify-start lg:w-auto lg:justify-center">
          <ActionItem item={item} />
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
