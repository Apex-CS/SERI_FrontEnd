import { Carousel, CommentBox, Loader } from "../../components";
import {MovieItem, ListGenrs} from "./components";
import "../../styles/Carousel.css";
import { ClassificationCatEnum, GenreCat, Movies as MoviesType } from "../../types/types";
import { getRandomEnumValue, getRandomNumber } from "../../utils/utils";
import image from "./movies-wallpaper/paprika.jpg";
import React, { useEffect } from "react";
import { genrsListData, moviesListData } from "../../resources/data/MoviesData";
function Movies() {
	const [moviesList, setMoviesList] = React.useState<MoviesType[]>();
	const [genrs, setGenrs] = React.useState<GenreCat[]>();

	console.log("🚀 ~ file: Movies.tsx:68 ~ Movies ~ moviesTemp:", moviesListData);

	// Variable que optendra la url y mediante los parametros en ella se definira la busque de peliculas para mostrar en la pagina
	const url: string = "";

	const searchMovieHandler = (textMovie: string) => {
		/**
		 * funcion que se comunicara con la API intentando
		 *  buscar una pelicula o alguna serie de peliculas
		 *
		 *  NOTA:  Aun quedo por definir que es lo que hara dicho buscador!!!
		 * */
		console.log("🚀 ~ file: Movies.tsx:11 ~ searchMovieHandler ~ textMovie:", textMovie);
	};

	const getGenrs = () => {
		/**
		 * Funcion que obtendra una lista con
		 * los elementos de genereros para presentar en la lista
		 *
		 * El objeto Genrs sera algo como
		 * {
		 *  id: number | string
		 *  label: string
		 * }
		 */
		console.log("🚀 ~ file: Movies.tsx:42 ~ getGenrs ~ genrsListData:", genrsListData);
		return genrsListData;
	};

	const getMovies = async (): Promise<MoviesType[]> => {
		/**
		 * despues de obtener los parametros de busqueda se enviara una url ala API
		 * y devolvera una lista con peliculas para mostrar
		 */
		return await moviesListData;
	};

	useEffect(() => {
		setTimeout(() => {
			getMovies().then((data) => {
				console.log("🚀 ~ file: Movies.tsx:104 ~ getMovies ~ data:", data);
				setMoviesList(data);
			});

			setGenrs(getGenrs());
		}, 6000);
	}, []);

	return (
		<div className='flex flex-col w-full'>
			<div className='flex flex-row w-full'>
				<div className='flex flex-row w-full justify-start'>
					<div className='w-60 p-2 ml-4 mr-4'>
						{genrsListData ? (
                            <ListGenrs
                                dataList={genrsListData}
                            />
						) : (
							<Loader />
						)}
					</div>

					<div className='flex flex-col w-full'>
						{moviesList ? (
								moviesList?.map((item) => (
									<MovieItem
										item={item}
										image={image}
									/>
								))
						) : (
							<Loader />
						)}
					</div>
				</div>
			</div>

			<CommentBox />
		</div>
	);
}

export default Movies;
