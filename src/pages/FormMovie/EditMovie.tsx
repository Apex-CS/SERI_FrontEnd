/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { Button, InputFile, InputSelect, InputText, InputTextArea, Loader } from "../../components";
import InputDatePicker from "../../components/Inputs/InputDatePicker/InputDatePicker";
import { DirectorsListExample, GenrsListData, GenrsListDataByMovieExample, MovieExample, StarsListTemp, StreamingPlatformData, StreamingPlatformListByMovieExample, WritersListExample } from "../../resources/data/MoviesData";
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
import { getRandomNumber, handlerEmptyNumberValues, handlerEmptyStringsValues, handlerPosterValue } from "../../utils/utils";
import { ContainerSearch, GenrsList, StreamingPlatformList, TagsList } from "./components";
import { useParams } from "react-router-dom";

const rowClass = "grid md:grid-cols-2 md:gap-6 mt-5";
const inputSelecContainerClass = `w-2/4 mx-2`;
function EditMovie() {
    let { movieId } = useParams();
	const [poster, setPoster] = React.useState<File | string>('');
	const [movieLoadingFlag, setMovieLoadingFlag] = useState(false);
	const [title, setTitle] = React.useState<string>("");
	const [languages, setLanguages] = React.useState<string[]>([""]);
	const [classification, setClassification] = React.useState<string>("");
	const [classificationData, setClassificationData] = React.useState<string[]>([""]);
	const [genres, setGenres] = React.useState<GenreCat[]>([]);
	const [duration, setDuration] = React.useState<number>(0);
	const [synopsis, setSynopsis] = React.useState<string>("");
	const [language, setLanguage] = React.useState<string>("");
	const [streamingPlatforms, setStreamingPlatforms] = React.useState<StreamingPlatformsCat[]>([]);
	const [directors, setDirectors] = React.useState<Director[]>([]);
	const [writers, setWriters] = React.useState<Writer[]>([]);
	const [stars, setStars] = React.useState<Star[]>([]);
	const [directorsData, setDirectorsData] = React.useState<Director[]>([]);
	const [writersData, setWritersData] = React.useState<Writer[]>([]);
	const [starsData, setStarsData] = React.useState<Star[]>([]);
	const [releaseDate, setReleaseDate] = React.useState<Date>(new Date());
	const [streamingsMovie, setStreamingsMovie] = React.useState<StreamingPlatformsCat[]>([]);
	const [tags, setTags] = React.useState<string[]>([]);
	const [tagInput, setTagInput] = React.useState<string>("");

	const getDirector = (directoValueSearch: string) => {
		const responseDirectorsAPI: Director[] = DirectorsListExample;
		return responseDirectorsAPI;
	};
	const getStars = (startValueSearch: string) => {
		const responseStarsAPI: Star[] = StarsListTemp;
		return (responseStarsAPI);
	};
	const getWritters = (writterValueSearch: string) => {
		const responseWrittersAPI: Writer[] = WritersListExample;
		return responseWrittersAPI;
	};
	const getLanguages = () => {
		const languagesData = Object.values(LanguageEnum) as string[];
		return languagesData;
	};
	
	const getStreamingPlatforms = () => {
		return StreamingPlatformData;
	};
	const getClasifications = () => {
		return Object.values(ClassificationCatEnum) as string[];
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
		const newArray = directors;
		newArray.push(director)
		setDirectors(newArray);
	}

	const handlerSearchWritter = (searchValue: string) => {
		/**
		 * Call API to search some list  of related values
		 * with the searchValue:string
		 * and return a array of elements
		 */
		const responseWritters = getWritters(searchValue)
		setWritersData(responseWritters);
	}

	const postTag = (newTagValue: string): string => {
		return newTagValue;
	};

	const onsubmitTag = () => {
		setTags([...tags, tagInput.toString()]);
		tags?.push(tagInput + "");
		setTagInput("");
	};

	const removeTagFromList = (indexProp: number) =>
		setTags((current) => current.filter((tag, index) => index !== indexProp));

	const getMoviesHosted = (idMovie: string) => {
		const responseMovieHosted: StreamingPlatformsCat[] = StreamingPlatformListByMovieExample;
		return responseMovieHosted;
	};

	const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
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
		console.log("🚀 ~ file: EditMovie.tsx:145 ~ onSubmitHandler ~ formData:", formData)
		tags.forEach((tagItem) => {
			postTag(tagItem);
		});

		genres.forEach(genrItem => {
			if (genrItem.selected) {
				console.log("🚀 ~ file: EditMovie.tsx:151 ~ onSubmitHandler ~ genrItem CallAPI:", genrItem);	
			}
		})
		
		streamingPlatforms.forEach(streamItem => {
			if (streamItem.select) {
				console.log('CALL API streamItem', streamItem);
			}
		});

		directors.forEach((directorItem) => {
			console.log("🚀 ~ file: EditMovie.tsx:173 ~ directors.forEach ~ directorItem:", directorItem);
		});

		writers.forEach((writerItem) => {
			console.log("🚀 ~ file: EditMovie.tsx:177 ~ writers.forEach ~ writerItem:", writerItem)
		});

		stars.forEach((StarItem) => {
			console.log("🚀 ~ file: EditMovie.tsx:181 ~ stars.forEach ~ StarItem:", StarItem)
		});

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

    useEffect(() => {
        const getMovieInfoFromID = () => {
			const responseMovie: Movies = MovieExample;
			setClassification(handlerEmptyStringsValues(responseMovie.classification));
			setDuration(handlerEmptyNumberValues(responseMovie.duration));
			setLanguage(handlerEmptyStringsValues(responseMovie.originalLanguage))
			setPoster(responseMovie.poster);
			setSynopsis(handlerEmptyStringsValues(responseMovie.synopsis));
			setTitle(handlerEmptyStringsValues(responseMovie.title));
			setReleaseDate(responseMovie.release_date ? responseMovie.release_date : new Date());
        }

		const getTagsByMovie = () => {
			const tagsResponse = [
					'Foreign','Written-directed','Enjoyable','Brilliant','Emotional','Well-acted','Moving','Insightful','Beautiful','Dramatic','Powerful','Absorbing','Family','Intense','Character-driven','Touching','Mysterious','Teenagers','Challenging','LGBT','Fun','Based on a book','Thrilling','Violent','Dark',
			];
			setTags(tagsResponse);
		}
			
		 const getGenresByMovie = () => {
			 const genrsAPIData = GenrsListDataByMovieExample.map(item => {
				item.selected = false
				return item;
			});
			
			const tempAPIArray = GenrsListData.map(itemGenrRenderItem => {
				if (genrsAPIData.find(e => e.id === itemGenrRenderItem.id)) {
					itemGenrRenderItem.selected = true;
				} else {
					itemGenrRenderItem.selected = false;
				}

				return itemGenrRenderItem;
			})
			console.log("🚀 ~ file: EditMovie.tsx:246 ~ tempAPIArray ~ tempAPIArray:", tempAPIArray)

		 	setGenres(tempAPIArray);
		 }

		const getStreamPlatformByMovie = () => {
			const streamPlatforms : StreamingPlatformsCat[] = getMoviesHosted(movieId ? movieId : '0');
			streamPlatforms.forEach(streamItem => streamItem.select = false);
			const tempStreamingPlatformOriginal = getStreamingPlatforms().map((itemStream) => {
				if (streamPlatforms.find(e => e.id === itemStream.id)) {
					itemStream.select = true;
				} else {
					itemStream.select = false;
				}
				return itemStream;
			})
			setStreamingPlatforms(tempStreamingPlatformOriginal);
		};

        setTimeout(() => {
			getMovieInfoFromID()
			getTagsByMovie()
			getGenresByMovie()
			getStreamPlatformByMovie()
			setMovieLoadingFlag(true);
		}, 5000);
		// }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]); // Effect execute just one time
        
	return (
		<div className='flex justify-center items-stretch flex-col container w-3/5 mx-auto mt-5 mb-5 text-white'>
		{movieLoadingFlag ? (
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
						<h1 className="mr-12">Release Date</h1>
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
						onSearchHandlerEvent={handlerSearchStars}
						placeHolder={"Search Stars by name..."}
						setListData={setStarsData}
						handlerClickElement={handlerClickStarEvent}
					/>
				</div>

				<div className='flex items-center justify-between py-5'>
					<div className=' w-full justify-between items-center '>
						<h1 className='my-2'>Where to Watch:</h1>
						<StreamingPlatformList
							listDataRender={streamingPlatforms}
							setListDataRender={setStreamingPlatforms}
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
		) : (
			<div className="flex mt-16 justify-center items-center container">
				<Loader />
			</div>
			
		)}
		</div>
	);
}

export default EditMovie;
