import { useState } from "react";
import { GenreCat } from "../../../../types/types";

interface GenrsListProps {
  listGenrs: GenreCat[] | undefined;
  setGenres: React.Dispatch<React.SetStateAction<GenreCat[]>>;
}

interface ElementListProps {
  item: GenreCat;
  setGenresData: React.Dispatch<React.SetStateAction<GenreCat[]>>;
}

const SELECT_GENR_CLASS =
  " bg-blue-800 p-2 my-2 mx-1 rounded-xl text-white flex justify-center items-center border-2 border-pink-600 ";
const BUTTON_DEFAULT_CLASS =
  " bg-yellow-500 p-2 my-2 mx-1 rounded-xl text-white flex justify-center items-center ";

const ListElement = ({ item, setGenresData }: ElementListProps) => {
  const [classFlag, setclassFlag] = useState(item.selected);
  /**
   * Function that handle the borderColor class for the single item
   * and set the new array of the GenrCat item in the array to send in the form
   * @param itemGenr
   */
  const handlerGenrSelector = (itemGenr: GenreCat) => {
    setclassFlag((prevValue) => {
      // Validate if change the value of the object
      if (!prevValue) {
        setGenresData((prevArray) => {
          prevArray.forEach((prevItem) => {
            if (prevItem.id === itemGenr.id) {
              prevItem.selected = true;
            }
          });
          return prevArray;
        });
      } else {
        // Validate if change the value of the object
        setGenresData((prevArray) => {
          prevArray.forEach((prevItem) => {
            if (prevItem.id === itemGenr.id) {
              prevItem.selected = false;
            }
          });
          return prevArray;
        });
      }
      return !prevValue; // Change the styleClassFlag value
    });
  };

  return (
    <button
      type="button"
      style={{ listStyle: "none" }}
      onClick={() => handlerGenrSelector(item)}
      className={classFlag ? SELECT_GENR_CLASS : BUTTON_DEFAULT_CLASS}
      key={item.id}
    >
      <h1 className="text-lg text-ellipsis text-white">{item.description}</h1>
    </button>
  );
};

const GenrsList = ({ listGenrs, setGenres }: GenrsListProps) => (
  <ul className="flex flex-wrap items-center justify-between text-gray-900 dark:text-white w-full ">
    {listGenrs?.map((item) => (
      <ListElement item={item} setGenresData={setGenres} />
    ))}
  </ul>
);
export default GenrsList;
