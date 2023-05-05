import { Carousel, CommentBox, Loader, Pagination, Search } from "../../components";
import { MovieItem, ListGenrs } from "./components";
import "../../styles/Carousel.css";
import { ClassificationCatEnum, GenreCat, Movies as MoviesType } from "../../types/types";
import { getRandomEnumValue, getRandomNumber } from "../../utils/utils";
import React, { useEffect } from "react";
import { GenrsListData, moviesListData } from "../../resources/data/MoviesData";
function Movies() {
	const [moviesList, setMoviesList] = React.useState<MoviesType[]>();
	const [genrs, setGenrs] = React.useState<GenreCat[]>();
	const imageURL = 'https://m.media-amazon.com/images/M/MV5BNDI4MGEwZDAtZDg0Yy00MjFhLTg1MjctODdmZTMyNTUyNDI3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg'

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
		console.log("🚀 ~ file: Movies.tsx:42 ~ getGenrs ~ GenrsListData:", GenrsListData);
		return GenrsListData;
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
		<div className='justify-center items-center flex flex-col w-full'>
			<div className='container m-6 flex flex-row w-full'>
				<div className='flex flex-row w-full justify-start'>
					<div className='w-60 mr-4'>
						{GenrsListData ? <ListGenrs dataList={GenrsListData} /> : <Loader />}
					</div>

					<div className='flex flex-col w-full'>
						<div className='pl-3 pr-3'>
							<Search label={""}/>
						</div>

						{moviesList ? (
							moviesList?.map((item) => (
								<MovieItem
									item={item}
									image={imageURL}
								/>
							))
						) : (
							<Loader />
						)}
						<div className="flex justify-center items-center">
							<Pagination />
						</div>
						
					</div>
				</div>
			</div>
		</div>
	);
}

export default Movies;
