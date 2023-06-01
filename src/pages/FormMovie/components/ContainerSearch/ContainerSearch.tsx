import { useState } from "react";
import { LabelSubtitle, Search } from "../../../../components";
import { Director, Star, Writer } from "../../../../types/types";
import { getRandomNumber } from "../../../../utils/utils";

interface ContainerSearchProps {
  label: string;
  placeHolder: string;
  listData: Director[] | Star[] | Writer[];
  setListData: React.Dispatch<
    React.SetStateAction<Director[] | Star[] | Writer[]>
  >;
  renderList: Director[] | Star[] | Writer[];
  onSearchHandlerEvent: (searchText: string) => void;
  classNameContainer?: string;
  classNameContainerInput?: string;
  handlerClickElement: (element: Director | Star | Writer) => void;
}

const titleColoDefault = "text-yellow-500";

const ContainerSearch = ({
  label,
  placeHolder,
  listData,
  renderList,
  setListData,
  onSearchHandlerEvent,
  handlerClickElement,
  classNameContainer = "",
}: ContainerSearchProps) => {
  const [localList, setlocalList] = useState<Director[] | Star[] | Writer[]>(
    []
  );
  const onSubmitEventHandler = (searchValue: string) => {
    onSearchHandlerEvent(searchValue);
  };

  const clickHandlerList = (item: Director | Star | Writer) => {
    handlerClickElement(item);
    setlocalList((prevState) => [...prevState, item]);
    setListData([]);
  };

  const onClickRemoveTag = (indexRemove: number) => {
    setlocalList((prevArray) =>
      prevArray.filter((prevItem, index) => index !== indexRemove)
    );
  };

  return (
    <div className={`flex flex-col w-full ${classNameContainer}`}>
      <div
        className={`flex w-full my-2 flex-col items-start justify-center p-0 rounded-lg`}
      >
        <div className={`flex flex-col w-full items-start justify-start mt-3`}>
          <div className="w-24 mr-6 mb-2 flex items-center justify-start">
            <LabelSubtitle
              customClass={titleColoDefault}
              textSize="text-lg"
              subtitle={label}
            />
          </div>
          <Search
            inputSize="w-10/12"
            label={label}
            placeholder={placeHolder}
            className={`w-full flex items-center`}
            onSubmit={onSubmitEventHandler}
            grayBackground={false}
          />
        </div>
        {listData.length > 0 && (
          <ul className="flex overflow-y-auto flex-wrap justify-around items-center flex-row w-full list-none my-2 py-2  text-gray-500 list-inside dark:text-gray-400">
            {listData?.map((item) => (
              <li
                onClick={() => clickHandlerList(item)}
                className="focus:outline-none text-white focus:ring-4 focus:ring-purple-300 font-medium rounded-lg m-1 px-3 py-1  bg-yellow-700 "
                key={getRandomNumber(1000000)}
              >
                <h1>{item.name}</h1>
              </li>
            ))}
          </ul>
        )}

        {renderList.length > 0 && (
          <div className="flex w-full flex-col ml-0 items-end">
            <h1 className="text-sm w-full mt-2 text-gray-400">
              Selected {label}:
            </h1>
            <ul className="flex w-full flex-row flex-wrap list-none container ml-3 text-gray-500list-inside dark:text-gray-400">
              {renderList?.map((item, index) => (
                <li
                  className="focus:outline-none flex flex-row items-center justify-between text-white focus:ring-4 focus:ring-purple-300 font-medium bg-yellow-500 w-fit border-x-purple-600 rounded-lg p-2 mt-2 mr-2"
                  key={getRandomNumber(1000000)}
                >
                  <h1>{item.name}</h1>
                  <svg
                    onClick={(event) => {
                      onClickRemoveTag(index);
                      event.preventDefault();
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x ml-3 mb-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContainerSearch;
