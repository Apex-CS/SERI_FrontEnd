/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { getRandomNumber, handlerPosterValue } from "../../utils/utils";
import { ContainerSearch, GenrsList, StreamingPlatformList, TagsList } from "./components";

const rowClass = "grid md:grid-cols-2 md:gap-6 mt-5";
const inputSelecContainerClass = `w-2/4 mx-2`;
function AddNewMovie() {
	const [poster, setPoster] = React.useState<File | string>('');
	const [title, setTitle] = React.useState<string>("");
	const [languages, setLanguages] = React.useState<string[]>([""]);
	const [classification, setClassification] = React.useState<string>("");
	const [classificationData, setClassificationData] = React.useState<string[]>([""]);
	const [genres, setGenres] = React.useState<GenreCat[]>([]);
	const [duration, setDuration] = React.useState<number>(0);
	const [synopsis, setSynopsis] = React.useState<string>("");
	const [language, setLanguage] = React.useState<string>("");
	
	const [streamingPlatforms, setStreamingPlatforms] = React.useState<StreamingPlatformsCat[]>([]);
	
	
	const [directorsData, setDirectorsData] = React.useState<Director[]>([]);
	const [writersData, setWritersData] = React.useState<Writer[]>([]);
	const [starsData, setStarsData] = React.useState<Star[]>([]);
	const [writers, setWriters] = React.useState<Writer[]>([]);
	const [stars, setStars] = React.useState<Star[]>([]);
	const [directors, setDirectors] = React.useState<Director[]>([]);
	
	const [releaseDate, setReleaseDate] = React.useState<Date>(new Date());
	const [streamingsMovie, setStreamingsMovie] = React.useState<StreamingPlatformsCat[]>([]);
	const [tags, setTags] = React.useState<string[]>([]);
	const [tagInput, setTagInput] = React.useState<string>("");

	const getDirector = (directoValueSearch: string) => {
		console.log("🚀 ~ file: AddNewMovie.tsx:47 ~ getDirector ~ directoValueSearch:", directoValueSearch)
		const responseDirectorsAPI: Director[] = [{id: 1, name:'Roman Polansky'}, {id: 1, name:'Roman Polansky'}, {id: 1, name:'Roman Polansky'}, {id: 1, name:'Roman Polansky'}, {id: 1, name:'Roman Polansky'},];
		return responseDirectorsAPI;
	};
	const getStars = (startValueSearch: string) => {
		console.log("🚀 ~ file: AddNewMovie.tsx:51 ~ getStarts ~ startValueSearch:", startValueSearch)
		const responseStarsAPI: Star[] = [{id: 1, name:'Brad Pitt'}];
		return (responseStarsAPI);
	};
	const getWritters = (writterValueSearch: string) => {
		console.log("🚀 ~ file: AddNewMovie.tsx:55 ~ getWritters ~ writterValueSearch:", writterValueSearch)
		const responseWrittersAPI: Writer[] = [{id: 1, name:'Denis Villanueve'}];
		return responseWrittersAPI;
	};
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

	const handlerSearchDirectors = (searchValue: string) => {
		console.log("🚀 ~ file: AddNewMovie.tsx:67 ~ handlerSearchDirectors ~ searchValue:", searchValue)
		/**
		 * Call API to search some list  of related values
		 * with the searchValue:string
		 * and return a array of elements
		 */
		const responseDirectors = getDirector(searchValue);
		setDirectorsData(responseDirectors);
	}

	const handlerSearchStars = (searchValue: string) => {
		/**
		 * Call API to search some list  of related values
		 * with the searchValue:string
		 * and return a array of elements
		 */
		const responseStars = getStars(searchValue);
		setStarsData(responseStars)
	}

	const handlerSearchWritter = (searchValue: string) => {
		console.log("🚀 ~ file: AddNewMovie.tsx:80 ~ handlerSearchWritter ~ searchValue:", searchValue)
		/**
		 * Call API to search some list  of related values
		 * with the searchValue:string
		 * and return a array of elements
		 */
		const responseWritters = getWritters(searchValue)
		setWritersData(responseWritters);
	}

	const handlerClickStarEvent = (star: Star) => {
		console.log("🚀 ~ file: EditMovie.tsx:103 ~ handlerClickStarEvent ~ Star:", star)
		setStars(prevArray => {
			prevArray.push(star)
			return prevArray
		})
	}
	
	const handlerClickWritterEvent = (writter: Writer) => {
		console.log("🚀 ~ file: EditMovie.tsx:106 ~ handlerClickWritterEvent ~ writter:", writter)
		setWriters(prevArray => {
			prevArray.push(writter)
			return prevArray;
		})
	}

	const handlerClickDirectorEvent = (director: Director) => {
		console.log("🚀 ~ file: EditMovie.tsx:111 ~ handlerClickDirectorEvent ~ director:", director)
		setDirectors(prevArray => {
			prevArray.push(director)
			return prevArray;
		})
		
	}

	const postTag = (newTagValue: string): string => {
		console.log("🚀 ~ file: AddNewMovie.tsx:62 ~ postTag ~ newTagValue:", newTagValue);
		return newTagValue;
	};

	const onsubmitTag = () => {
		setTags([...tags, tagInput.toString()]);
		tags?.push(tagInput + "");
		setTagInput("");
	};

	const removeTagFromList = (indexProp: number) =>
		setTags((current) => current.filter((tag, index) => index !== indexProp));

	const getMoviesHosted = (idMovie: number | string) => {
		const responseMovieHosted: StreamingPlatformsCat[] = [];
		return responseMovieHosted;
	};

	const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		const formData: Movies = {
			id: getRandomNumber(1000),
			title: title.toString(),
			createdDate: new Date(),
			duration: duration,
			release_date: releaseDate,
			originalLanguage: language,
			classification: classification,
			synopsis: synopsis,
			createdBy: "",
			poster: handlerPosterValue(poster),
		};
		tags.forEach((tagItem) => {
			postTag(tagItem);
		});

		 genres.forEach((genrItem) => {
		 	console.log("🚀 ~ file: AddNewMovie.tsx:105 ~ genres.forEach ~ send genrItem to API Genrs:", genrItem);
		 });

		 console.log("🚀 ~ file: AddNewMovie.tsx:107 ~ onSubmitHandler ~ streamingsMovie:", streamingsMovie);

		const streamMovisDataAPI = streamingsMovie.filter(
			(value, index, self) => index === self.findIndex((t) => t.id === value.id),
		);
		console.log("🚀 ~ file: AddNewMovie.tsx:115 ~ onSubmitHandler ~ streamMovisDataAPI:", streamMovisDataAPI)
		
		streamMovisDataAPI.forEach(streamItem => {
			console.log('CALL API streamItem', streamItem);
		});
		console.log("🚀 ~ file: AddNewMovie.tsx:96 ~ onSubmitHandler ~ send formData:", formData);
		event.preventDefault();
	};

	const onResetHandlerEvent = () => {
		// clean all the elements in the form
		setTitle("");
		setTags([]);
		setTagInput("");
		setClassification("");
		setLanguage("");
		setDuration(0);
		setStreamingsMovie([]);
		setReleaseDate(new Date());
		setSynopsis("");
		setStreamingPlatforms(getStreamingPlatforms());
		setPoster('');
		
	};

	useEffect(() => {
		setLanguages(getLanguages());
		setClassificationData(getClasifications());
		setStreamingPlatforms(getStreamingPlatforms());
	}, []);

	const genrsListDataRef = React.useRef<GenreCat[]>();

	useEffect(() => {
		setGenres(getGenres());
		genrsListDataRef.current = getGenres();
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
						label={"Title"}
						value={title}
						setValue={setTitle}
						classNameContainer={`w-2/4 mr-4 mt-2 flex items-center`}
					/>
					<InputFile
						label={"Poster"}
						valueImage={poster}
						setValueImage={setPoster}
					/>
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
					<GenrsList
						listGenrs={genres}
						setGenres={setGenres}
					/>
				</div>
				<div className='flex flex-row w-full justify-around items-center py-1'>
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

					<InputText
						type='number'
						numberValue={duration}
						setNumberValue={setDuration}
						label={"duration"}
						maxNumber={500}
						placeHolder={""}
						classNameContainer={`w-2/12 m-5 flex justify-between`}
					/>

					<div className={`w-2/5 flex justify-center items-center flex-col mx-2`}>
						<h1>Release Date</h1>
						<InputDatePicker
							setDateValue={setReleaseDate}
							dateValue={releaseDate}
						/>
					</div>
				</div>
				<div
					id='container-search'
					className='flex py-5 flex-col'>
					{/* Director */}
					<ContainerSearch
						label='Directors'
						listData={directorsData}
						onSearchHandlerEvent={handlerSearchDirectors}
						placeHolder={"Search Directores by name..."}
						setListData={setDirectorsData}
						handlerClickElement={handlerClickDirectorEvent}
					/>
					{/* Writers */}
					<ContainerSearch
						label='Writers'
						listData={writersData}
						setListData={setWritersData}
						onSearchHandlerEvent={handlerSearchWritter}
						placeHolder={"Search Writers by name..."}
						handlerClickElement={handlerClickWritterEvent}
					/>
					{/* Stars */}
					<ContainerSearch
						label='Stars'
						listData={starsData}
						setListData={setStarsData}
						onSearchHandlerEvent={handlerSearchStars}
						placeHolder={"Search Stars by name..."}
						handlerClickElement={handlerClickStarEvent}
					/>
				</div>

				<div className='flex items-center justify-between py-5'>
					<div className=' w-full justify-between items-center '>
						<h1 className='my-2'>Where to Watch:</h1>
						<StreamingPlatformList
							setListDataRender={setStreamingPlatforms}
							listDataRender={streamingPlatforms}
						/>
					</div>
				</div>
				<div className='flex bg-gray-800 h-auto p-3'>
					<div className='flex flex-col justify-center w-1/4'>
						<h1>Tags:</h1>
						<InputText
							label=''
							value={tagInput}
							setValue={setTagInput}
							onSubmitEvent={onsubmitTag}
						/>
					</div>

					<TagsList
						onClickRemoveTag={removeTagFromList}
						tagsList={tags}
					/>
				</div>
				<div
					id='buttons-container'
					className='flex w-full items-center justify-around my-6'>
					<Button
						label='Save'
						isPillStyle={true}
						type={"submit"}
						customClass={"mx-2 w-1/6 bg-yellow-500 text-lg text-center text-white"}
					/>
					<Button
						label='Cancel'
						isPillStyle={true}
						type={"button"}
						onClickHandler={onResetHandlerEvent}
						customClass={"mx-2 w-1/6 bg-yellow-500 text-lg text-center text-white"}
					/>
				</div>
			</form>
		</div>
	);
}

export default AddNewMovie;
