//NUEVA
import React, { useEffect } from "react";
import { Provider } from 'react-redux';
import { LabelTitle, Loader } from "../../components";
import { GenreCat, Movies } from "../../types/types";
import { formatTime, getRandomClassification, getRandomNumber } from "../../utils/utils";
import { MovieInfo } from "./components";
import { useParams } from "react-router-dom";
import CommentList from "./components/ComentList";
import store from "../../redux/store/store";
import HeaderElement from "./components/HeaderElement";
import GenresList from "./components/GenresList";
import cinemaLogo from  '.././../resources/img/cinema-logo.png' //' cinema-logo.png'
import MovieInfoElement from "./components/MovieInfoElement";

function Movie({}) {
	let { movieId } = useParams();
	const imageURL = 'https://i.pinimg.com/474x/b2/7b/7b/b27b7bbd39877d9ea00bd70c9e467677--godfather-movie-film-making.jpg';
	const logoURL = 'https://e7.pngegg.com/pngimages/674/509/png-clipart-popcorn-cinema-systems-corp-film-reel-popcorn-logo-film.png';
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
			release_date: new Date('1964-01-29'),
			likes: getRandomNumber(1000),
			synopsis: `El general de la Fuerza Aérea de los Estados Unidos, Jack D. Ripper (Sterling Hayden; nombre que se pronuncia Jack The Ripper, Jack el Destripador), planea dar comienzo a una guerra nuclear con la Unión Soviética con el objetivo de impedir lo que considera una conspiración comunista para fluorizar el agua, contaminando así los "preciosos fluidos corporales" de los estadounidenses. Da la orden, sin la autorización del presidente Merkin Muffley (Peter Sellers), a su escuadra nuclear de combate, de bombardear sus respectivos objetivos dentro de la Unión Soviética, con la esperanza de que el presidente ordene un ataque a gran escala al no encontrar otra opción.
			El general Ripper desconoce, sin embargo, que los soviéticos cuentan con un "Dispositivo del Fin del Mundo", el cual se activaría automáticamente en caso de detectar un ataque nuclear sobre territorio de la Unión Soviética, destruyendo toda vida sobre la faz de la Tierra por contaminación radiactiva.`,
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

	// function formatTime(minutes: number | undefined): string {
	// 	if (minutes) {
	// 		const hours = Math.floor(minutes / 60);
	// 		const remainingMinutes = minutes % 60;
			
	// 		return `${hours}h ${remainingMinutes}m`;
			
	// 	} else {
	// 		return '0H, Om';
	// 	}
	// }

	useEffect(() => {
		setTimeout(() => {
			setMovie(getMovieInfoById());
		}, 1000);
	}, []);
	const tempGenrs: GenreCat[] = [{id: getRandomNumber(), description:"Mafia"}, {id: getRandomNumber(), description:"Drama"}, {id: getRandomNumber(), description:"Crimen"}];

	return (
		<Provider store={store}>
			<div className="flex w-full items-center justify-center">
				<div
					className='flex flex-col justify-center items-center '>
					 <div
						id='movie-info'
						className='flex flex-col w-full justify-center items-center content-center px-0 pt-5 ml-10 rounded-lg '>
							{movie ? (
								<div className='flex flex-row mt-10 justify-between items-center w-full h-full max-h-max'>
									<img
										className='object-contain h-1/4 w-1/4 transition-all duration-300 rounded-lg cursor-pointer filter hover:grayscale'
										src={movie.poster}
										alt='poster'
									/>
									<div className="w-full flex justify-end items-end">
										<div className='w-3/4 flex flex-col justify-around items-center max-w-3xl borde text-white border-gray-200 rounded-lg '>
											<div className='flex flex-col 2xl:w-3/5 xl:w-3/4 lg:w-3/4 md:w-5/5 mb-5 items-center justify-around'>
												<h1 className='text-3xl m-0 font-bold text-yellow-400'>{movie?.title}</h1>
												<div className="flex flex-row justify-end items-center mb-2">
													<GenresList listItems={tempGenrs} />
													<p className='text-zinc-200 text-xl px-1 py-1'>{formatTime(movie?.duration)}</p>{}
												</div>
											</div>
											<HeaderElement />
											<img
												className='object-contain h-1/4 w-2/6 transition-all duration-300 rounded-lg cursor-pointer filter'
												src={cinemaLogo}
												alt="logo-cinema" />
										</div>
									</div>
									
									
									
								</div>
							) : (
								<Loader />
							)}

							<div className='w-full mx-0 pr-10 mt-9'>
								<LabelTitle customClass="text-xl ml-1 my-0" title='STORYLINE'/>
								<p className='font-sans text-xl leading-8 text-justify my-5 text-zinc-300'>
									{movie?.synopsis}
								</p>
								<div className="flex flex-row items-center my-5 justify-start">
									{tempGenrs.map((item) => (
										<button
											type='button'
											className='text-white rounded-full font-medium border-2 border-zinc-500 text-sm px-5 py-2 text-center mr-3 hover:bg-zinc-400 active:zinc-400 focus:outline-none'
											>
											{item.description}
										</button>
									))}
								</div>
							</div>
							<div className="flex w-full items-start justify-start">
								{movie && (<MovieInfoElement item={movie} />)}
							</div>
					</div> 
					<div id='comment-div' className='flex flex-col w-full justify-center items-center px-5'>
						<div className='w-full flex flex-col justify-center items-center' id='comments-box'>
							<CommentList />
						</div>
					</div>
				</div>
			</div>
			
		</Provider>
	);
}

export default Movie;
