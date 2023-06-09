import { useState } from "react";
import { StreamingPlatformsCat } from "../../../../types/types";
import "./StreamingPlatform.css";

interface StreamingPlatformListProps {
  listDataRender?: StreamingPlatformsCat[];
  setListDataRender?: React.Dispatch<
    React.SetStateAction<StreamingPlatformsCat[]>
  >;
  selectFlag?: boolean;
}
interface ElementListProps {
  itemPlatform: StreamingPlatformsCat;
  setListDataRender?: React.Dispatch<
    React.SetStateAction<StreamingPlatformsCat[]>
  >;
  selectFlag: boolean;
}
const SELECT_GENR_CLASS =
  "my-2 mx-1 rounded-xl border-4 border-pink-600 flex justify-center items-center ";
const BUTTON_DEFAULT_CLASS =
  " my-2 mx-1 rounded-xl border-4 border-transparent flex justify-center items-center ";

const ListElement = ({
  itemPlatform,
  setListDataRender,
  selectFlag = true,
}: ElementListProps) => {
  const [classFlag, setClassFlag] = useState(itemPlatform.select);

  /**
   * Function that handle the borderColor class for the single item
   * and set the new array of the GenrCat item in the array to send in the form
   * @param itemPlatform
   */
  const handlerGenrSelector = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setClassFlag((prevValue) => {
      // Validate if push a new object
      if (setListDataRender) {
        if (!prevValue) {
          setListDataRender((preArray) => {
            preArray.forEach((prevItem) => {
              if (prevItem.id === itemPlatform.id) {
                prevItem.select = true;
              }
            });
            return preArray;
          });
        } else {
          setListDataRender((preArray) => {
            preArray.forEach((itemPrev) => {
              if (itemPrev.id === itemPlatform.id) {
                itemPrev.select = false;
              }
            });
            return preArray;
          });
        }
      }
      return !prevValue; // Change the styleClassFlag value
    });
    event.preventDefault();
  };

  return (
    <button
      type="button"
      style={{ listStyle: "none" }}
      disabled={!selectFlag}
      onClick={(event) => handlerGenrSelector(event)}
      className={classFlag ? SELECT_GENR_CLASS : BUTTON_DEFAULT_CLASS}
      key={itemPlatform.id}
    >
      <div className="bubble bg-white rounded-full">
        <img
          title={itemPlatform.name}
          className="icon"
          src={itemPlatform?.logo}
          alt={"item-logo"}
        />
      </div>
    </button>
  );
};

const StreamingPlatformList = ({
  listDataRender,
  setListDataRender,
  selectFlag = true,
}: StreamingPlatformListProps) => {
  return (
    <ul className="flex flex-row justify-around">
      {listDataRender &&
        listDataRender?.map((item) => (
          <li className="flex flex-col  items-center justify-center">
            <ListElement
              itemPlatform={item}
              setListDataRender={setListDataRender}
              selectFlag={selectFlag}
            />
          </li>
        ))}
    </ul>
  );
};
export default StreamingPlatformList;
