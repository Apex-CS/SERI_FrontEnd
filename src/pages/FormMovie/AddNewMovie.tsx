import React, { useEffect, useState } from "react";
import { Button, InputFile, InputSelect, InputText, InputTextArea } from "../../components";
import InputDatePicker from "../../components/Inputs/InputDatePicker/InputDatePicker";
import { GenrsListData, StreamingPlatformData } from "../../resources/data/MoviesData";
import {
	ClassificationCatEnum,
	Movies,
	LanguageEnum,
	Director,
	Star,
	Writer,
	StreamingPlatformsCat,
	GenreCat,
} from "../../types/types";
import { ContainerSearch, StreamingPlatformList } from "./components";

const rowClass = "grid md:grid-cols-2 md:gap-6 mt-5";
const inputSelecContainerClass = `w-2/5 mx-2`;
function AddNewMovie() {
	const [title, setTitle] = React.useState<string | number>("");
	const [languages, setLanguages] = React.useState<string[]>([""]);
	const [classification, setClassification] = React.useState<string>("");
	const [classificationData, setClassificationData] = React.useState<string[]>([""]);
	const [genr, setGenr] = React.useState<string>("");
	const [genres, setGenres] = React.useState<GenreCat[] | undefined>();
	const [genresData, setGenresData] = useState();
	const [duration, setDuration] = React.useState<string | number>("");
	const [synopsis, setSynopsis] = React.useState<string>("");
	const [language, setLanguage] = React.useState<string>("");
	const [directors, setDirectors] = React.useState<Director[]>();
	const [streamingPlatforms, setStreamingPlatforms] = React.useState<StreamingPlatformsCat[]>();
	const [writers, setWriters] = React.useState<Writer[]>();
	const [stars, setStars] = React.useState<Star[]>();
	const [releaseDate, setReleaseDate] = React.useState<Date>();
	const [streamingsMovie, setStreamingsMovie] = useState();
	const [tags, setTags] = useState();
	const [tag, setTag] = React.useState<string | number>('');

	const form: Movies = {};
	const getDirector = (directoValueSearch: string) => {};
	const getStarts = (startValueSearch: string) => {};
	const getWritters = (writterValueSearch: string) => {};
	const getLanguages = () => {
		const languagesData = Object.values(LanguageEnum) as string[];
		return languagesData;
	};
	const getGenres = () => {
		return GenrsListData;
	};
	const getStreamingPlatforms = () => {
		return StreamingPlatformData;
	};
	const getClasifications = () => {
		return Object.values(ClassificationCatEnum) as string[];
	};
	const getTags = (tagValueSearch: string): string[] => {
		return [""];
	};
	const postTag = (newTagValue: string): string => {
		return "";
	};
	const getMoviesHosted = (idMovie: number | string) => {};
	const setFormAddMovie = () => {};

	const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {};

	const onResetHandlerEvent = () => {};

	useEffect(() => {
		setLanguages(getLanguages());
		setClassificationData(getClasifications());
		setStreamingPlatforms(getStreamingPlatforms());
		setGenres(getGenres());
	}, []);

	return (
		<div className='flex justify-center items-stretch flex-col container w-3/5 mx-auto mt-5 mb-5 text-white'>
			<form
				onSubmit={onSubmitHandler}
				className=''>
				{/* Titulo */}
				<div className='relative z-0 w-full mb-1 group flex flex-row items-start justify-between'>
					<InputText
						type={"text"}
						name={"title"}
						id={"title"}
						placeHolder={"Title Movie"}
						required={true}
						label='Title'
						value={title}
						setValue={setTitle}
						classNameContainer={`w-2/4 mr-4 mt-2 flex items-center`}
					/>
					<InputFile label={"Poster"} />
				</div>

				<div className='inline-flex items-center justify-center w-full'>
					<span className='absolute px-3 font-medium  -translate-x-1/2  left-1/2 dark:text-white '>
						Info
					</span>
					<hr className='w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
				</div>

				{/* Synopsis */}
				<InputTextArea
					name='synopsis'
					value={synopsis}
					setValue={setSynopsis}
					label={"Synopsis"}
					id={"synopsis"}
					placeHolder={""}
				/>
				<div className={rowClass}></div>
				{/* Genres */}
				<div className='flex items-center justify-center py-5 '>
					<ul className='flex flex-wrap items-center justify-between text-gray-900 dark:text-white w-full '>
						{genres?.map((item) => (
							<button
								type='button'
								style={{ listStyle: "none" }}
								onClick={() => console.log("")}
								className='bg-yellow-300 p-2 my-2 mx-0 rounded-xl flex justify-center items-center'
								key={item.id}>
								<h1 className='text-lg text-ellipsis text-slate-500'>{item.description}</h1>
							</button>
						))}
					</ul>
				</div>
				<div className='flex flex-row w-full justify-around items-center py-5'>
					{/* Languages */}
					<InputSelect
						data={languages}
						id={"language"}
						label={"Original Language"}
						key={"language"}
						setValue={setLanguage}
						value={language}
						containerClass={inputSelecContainerClass}
					/>
					{/* Clasifications */}
					<InputSelect
						data={classificationData}
						id={"clasifications"}
						label={"Clasification"}
						key={"clasifications"}
						setValue={setClassification}
						value={classification}
						containerClass={inputSelecContainerClass}
					/>
					
					<div className={`w-2/5 mx-2`}>
						<h1>Release Date</h1>
						<InputDatePicker startDate={releaseDate} />
					</div>
				</div>
				<div id='container-search' className="flex py-5 flex-col">
					{/* Director */}
					<ContainerSearch
						label='Directors'
						listData={directors}
						onSearchHandlerEvent={() => console.log("")}
						placeHolder={"Search Directores by name..."}
					/>
					{/* Writers */}
					<ContainerSearch
						label='Writers'
						listData={writers}
						onSearchHandlerEvent={() => console.log("")}
						placeHolder={"Search Writers by name..."}
					/>
					{/* Stars */}
					<ContainerSearch
						label='Stars'
						listData={stars}
						onSearchHandlerEvent={() => console.log("")}
						placeHolder={"Search Stars by name..."}
					/>
				</div>

				<div className='flex items-center justify-between py-5'>
					<InputText
            type="number"
						value={duration}
						setValue={setDuration}
						label={"duration"}
            classNameContainer={`w-1/12 flex items-center justify-between`}
					/>
					<div className="ml-20 w-full justify-between items-center ">
						<h1 className="my-2">Where to Watch:</h1>
						<StreamingPlatformList listData={streamingPlatforms} />
					</div>
				</div>
				<div className="flex bg-gray-800 h-auto p-3 flex-col">
					<div>
						<h1>Tags:</h1>
						<InputText label="" value={tag} setValue={setTag} />
					</div>
					<ul>{}</ul>
					
				</div>
				<div
					id='buttons-container'
					className='flex w-full items-center justify-around my-4'>
						<Button label="Save" isPillStyle={true} type={'button'} customClass={'mx-2 w-1/6 bg-yellow-500 text-lg text-center text-white'} />
						<Button label="Cancel" isPillStyle={true} type={'button'} customClass={'mx-2 w-1/6 bg-yellow-500 text-lg text-center text-white'} />
				</div>
			</form>
		</div>
	);
}

export default AddNewMovie;
