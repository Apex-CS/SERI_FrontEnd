import { Link } from "react-router-dom";
import { Movies } from "../../types/types";
import { getRandomNumber, getStringWithElipsis } from "../../utils/utils";
import Loader from "../Loader/Loader";
import { Like } from "../../resources/svg/MoviesIcons";
interface ListProps {
  title: string;
  data: Movies[] | undefined;
  redirect?: boolean;
}

function List({ title, data, redirect = false }: ListProps) {
  const limitChart = 39;
  return (
    <div className="max-w-md ml-3 mt-3">
      <div className="flex justify-start items-center border-l-4 border-yellow-400">
        <h1 className="font-bold ml-1 dark:text-yellow-400">{title}</h1>
      </div>
      <ul className="max-w-md divide-y ">
        {data ? (
          data.map((item, index) => (
            <Link to={`/movie/${item.id}`}>
              <li
                key={getRandomNumber(999999)}
                className="pb-3 sm:pb-4 p-3 border-transparent"
              >
                <div className="flex space-x-4">
                  <div className="flex items-center justify-center">
                    <h1 className="w-auto flex items-center justify-start text-sm font-medium text-gray-900 truncate dark:text-white">
                      {index + 1}
                    </h1>
                  </div>
                  <div className="flex-1 flex items-center min-w-0">
                    <p className="w-auto flex justify-start text-sm font-medium text-gray-900 truncate dark:text-white">
                      {getStringWithElipsis(item.title, limitChart)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex-shrink-0 w-6">
                      <Like color="#E1AE2A" />
                    </div>
                    <span className="bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-semibold mr-2 px-2.5 py-0.5 w-10 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                      {item.likes}
                    </span>
                  </div>
                </div>
              </li>
            </Link>
          ))
        ) : (
          <Loader />
        )}
      </ul>
    </div>
  );
}

export default List;
