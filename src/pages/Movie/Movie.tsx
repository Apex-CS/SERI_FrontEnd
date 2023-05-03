import React, { useEffect } from "react";
import { Provider } from 'react-redux';
import { Loader } from "../../components";
import { Movies } from "../../types/types";
import { getRandomClassification, getRandomNumber } from "../../utils/utils";
import { MovieInfo } from "./components";
import { useParams } from "react-router-dom";
import CommentList from "./ComentList";
import store from "../../redux/store/store";

function Movie({}) {
	let { movieId } = useParams();
	const imageURL = 'https://i.pinimg.com/474x/b2/7b/7b/b27b7bbd39877d9ea00bd70c9e467677--godfather-movie-film-making.jpg';

		// Variable que optendra la url y mediante los parametros en ella se definira la pelicula para mostrar en la pagina
		const url: string = "";
		const defaultValueSynopsis =
			"The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.";
		const movieElement: Movies = {likes: 0};
		const [movie, setMovie] = React.useState<Movies>();

	const getStreamChannels = () => {
		/**
		 * Funcion que mediante el ID de la pelicula
		 * obtendra todos los canales de STREM donde esta alojada la pelicula
		 * mediante una llamada GET a la API
		 */
	};

	const getComments = () => {
		/**
		 * Funcion que mediante el ID de la pelicula
		 * obtendra todos los comentarios relacionados a dicha pelicula
		 * mediante una llamada GET a la API
		 */
		// setComments([1, 2, 3]);
	};

	const postComment = () => {
		/**
		 * Funcion que hara una llamada POST a la API
		 * e insertara un nuevo comentado ligado a la pelicula
		 */
	};

	const getTagsByMovie = () => {
		/**
		 * Funcion que mediante el ID de la pelicula
		 * obtendra todos los tags relacionados a dicha pelicula
		 * mediente una llamada GET ala API
		 */
	};

	const getMovieInfoById = () => {
		/**
		 * Funcion que mediante el ID obtenido por la url
		 * mandara una peticion a una API la cual devolvera
		 * TODA la informacion relacionada a la pelicula
		 */
		const movie: Movies = {
			id: getRandomNumber(),
			poster: 'https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
			title: "Dr Strangelove",
			duration: getRandomNumber(240),
			release_date: new Date(),
			likes: getRandomNumber(1000),
			classification: getRandomClassification(),
		};
		return movie;
	};

	const eventHandlerLike = async () => {
		/**
		 * Evento que enviara una llamada ala API
		 * de tipo POST para agregar un valor
		 * de Like a la pelicula
		 */
	};

	const eventHandlerDislike = async () => {
		/**
		 * Evento que enviara una llamada ala API
		 * de tipo POST para agregar un valor
		 * de Dislike a la pelicula
		 */
	};

	useEffect(() => {
		setTimeout(() => {
			setMovie(getMovieInfoById());
		}, 1000);
	}, []);

	return (
		<Provider store={store}>
		<div className='flex w-full flex-col content-center items-center '>
			<div
				id='movie-info'
				className='flex flex-col w-full justify-center items-start content-center px-28 py-5'>

					<div className='flex w-2/4 mb-3 items-center justify-around'>
						<h1 className='text-2xl text-white'>{movie?.title}</h1>
					</div>
					
					{movie ? (
						<div className='flex flex-row justify-center items-start content-center w-full h-full max-h-max  '>
							<div className='flex flex-col w-2/4 justify-around items-center'>
								<img
									className='object-contain h-3/6 w-5/12 transition-all duration-300 rounded-lg cursor-pointer filter hover:grayscale'
									src={movie.poster}
									alt='poster'
								/>
							</div>
							<MovieInfo item={movie} />
						</div>
					) : (
						<Loader />
					)}
			</div>
			<div
				id='comment-div'
				className='flex flex-col w-4/5 justify-center items-center p-5'>
				<div
					className='w-full flex flex-col justify-center items-center'
					id='comments-box'>
					<CommentList />
				</div>
			</div>
		</div>
		</Provider>
	);
}

export default Movie;
