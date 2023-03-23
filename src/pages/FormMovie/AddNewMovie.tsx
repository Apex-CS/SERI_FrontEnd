import React, { useState } from "react";
import { InputFile, InputSelect, InputText, Search } from "../../components";
import InputDatePicker from "../../components/Inputs/InputDatePicker/InputDatePicker";
import { Movies } from "../../types/types";


const rowClass = "grid md:grid-cols-2 md:gap-6 mt-5"
function AddNewMovie({}) {

  const [languages, setLanguages] = useState([]);
  const [genres, setGenres] = useState([]);


  const form : Movies = {};

  const getDirector = (directoValueSearch : string) => {};
  const getStarts = (startValueSearch: string) => {};
  const getWritters = (writterValueSearch: string) => {};
  const getLanguages = () => {};
  const getGenres = () => {};
  const getClasifications = () => {};
  const getTags = (tagValueSearch: string) => {};
  const getMoviesHosted = (idMovie: number | string) => {};


  const setFormAddMovie = () => {};

  const [title, setTitle] = React.useState<string | number>('');
  const [clasification, setClasification] = React.useState<string>('');
  
  return (
    <div className="flex justify-center items-stretch flex-col container mx-auto mt-5 mb-5">
      <form className="">
        <div className="relative z-0 w-full mb-6 group">
          <InputText
            type={"text"}
            name={"title"}
            id={"title"}
            placeHolder={"Title Movie"}
            required={true}
            label="Title"
            value={title}
            setValue={setTitle}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Synopsis:
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>

        <div className={rowClass}>
          
        </div>
        <div>
          <InputSelect
            data={[]}
            id={'genres'}
            label={'Genres'}
            key={'genres'}
          />
        </div>

        <div>
          <InputSelect
            data={[]}
            id={'language'}
            label={'Original Language'}
            key={'language'}
          />
        </div>
        <div>
          <InputSelect
            data={[]}
            id={'clasifications'}
            label={'Clasification'}
            key={'clasifications'}
          />
        </div>
        <div>
          <InputFile 
            label={'Upload Poster'}
          />
        </div>

        <div>
          Director:
          <Search />
        </div>

        <div>
            Writers:
            <Search />
        </div>

        <div>
            Starts:
            <Search />
        </div>

        <div>
          <InputDatePicker />
          {/* <InputText 
            label="Clasification"
             
          />*/}
        </div>
        <div>
          Duration
        </div>
      </form>
    </div>
  );
}

export default AddNewMovie;
