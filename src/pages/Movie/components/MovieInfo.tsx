import { Movies } from "../../../types/types";
import GenresList from "./GenresList";
import HeaderElement from "./HeaderElement";
import MovieInfoElement from "./MovieInfoElement";

interface MovieInfoProps {
	item: Movies;
}
function MovieInfo({ item }: MovieInfoProps) {
	const defaultValueSynopsis =
		"The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.";

	// ====>>>>> NOTA!!!
	// Parece ser que faltan los directores en el objeto Movie,
	// no se si se agregara directamente ahi o
	// se hara una tabla que contenga directores
	// Lo mismo de parte de los escritores y estrellas

	const getStreamChannels = () => {
		
	};

	const getGenrsMovie = () => {
		
	};

	const getLanguagesMovie = () => {
		
	};

	const getWritter = () => {
		
	};

	const getDirector = () => {
		
	};

	const getStars = () => {
		
	};

	return (
		<div className='container w-full max-w-3xl bg-white borde text-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4'>
			<HeaderElement />
			<div>
				<div className='w-full'>
					<p className=''>{defaultValueSynopsis}</p>
					<GenresList />
				</div>
			</div>
			<MovieInfoElement item={item} />
		</div>
	);
}

export default MovieInfo;
