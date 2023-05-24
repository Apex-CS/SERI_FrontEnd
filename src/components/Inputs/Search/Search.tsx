import { useState } from "react";

interface SearchProps {
  label?: string;
  onSubmit?: (searchValue: string) => void;
  buttonLabel?: string;
  placeholder?: string;
  className?: string;
  grayBackground?: boolean;
  inputSize?:
    | "w-1/12"
    | "w-2/12"
    | "w-3/12"
    | "w-4/12"
    | "w-5/12"
    | "w-6/12"
    | "w-7/12"
    | "w-8/12"
    | "w-9/12"
    | "w-10/12"
    | "w-11/12"
    | "w-12/12"
    | "w-full";
}
function Search({
  label = "Search",
  onSubmit,
  buttonLabel = "Search",
  placeholder = "Search movie...",
  className = `flex items-center`,
  grayBackground = false,
  inputSize = "w-full",
}: SearchProps) {
  const defaultInputClass = `block ${inputSize} p-4 pt-5 pl-10 text-sm text-gray-900  rounded-lg ${
    grayBackground ? "bg-gray-50" : "bg-white"
  } dark:placeholder-gray-400  `;
  const disabledButtonClass =
    "text-white absolute right-3.5 bottom-2.5 bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-4 py-2 mx-2 text-center";
  const defaultClassButton =
    "text-white absolute right-3.5 bottom-2.5 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 mx-2 dark:bg-blue-600 dark:hover:bg-blue-700";
  const [searchValue, setSearchValue] = useState("");
  const onSubmitEventHandler = () => {
    if (onSubmit) {
      setSearchValue("");
      onSubmit(searchValue);
    }
  };

  const inputSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event?.target?.value;
    setSearchValue(inputValue);
  };

  return (
    <div className={`${className}`}>
      <label
        htmlFor="default-search"
        className={`mb-2 text-sm font-medium text-gray-900 sr-only`}
      >
        {label}
      </label>
      <div
        className={`w-full flex flex-row items-center  relative bg-white rounded-md `}
      >
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          style={{ outline: "none" }}
          id="default-search"
          className={defaultInputClass}
          placeholder={placeholder}
          value={searchValue}
          onChange={inputSearchHandler}
        />
        <div>
          <button
            onClick={onSubmitEventHandler}
            type="submit"
            disabled={searchValue.length === 0}
            className={
              searchValue.length === 0
                ? disabledButtonClass
                : defaultClassButton
            }
          >
            {" "}
            {buttonLabel}{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
