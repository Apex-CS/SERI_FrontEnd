import { Movies } from "../../../types/types";
import MovieInfoElement from "./MovieInfoElement";

interface MovieInfoProps {
	item: Movies;
}
function MovieInfo({ item }: MovieInfoProps) {
	const defaultValueSynopsis =
		`El general de la Fuerza Aérea de los Estados Unidos, Jack D. Ripper (Sterling Hayden; nombre que se pronuncia Jack The Ripper, Jack el Destripador), planea dar comienzo a una guerra nuclear con la Unión Soviética con el objetivo de impedir lo que considera una conspiración comunista para fluorizar el agua, contaminando así los "preciosos fluidos corporales" de los estadounidenses. Da la orden, sin la autorización del presidente Merkin Muffley (Peter Sellers), a su escuadra nuclear de combate, de bombardear sus respectivos objetivos dentro de la Unión Soviética, con la esperanza de que el presidente ordene un ataque a gran escala al no encontrar otra opción.
		El general Ripper desconoce, sin embargo, que los soviéticos cuentan con un "Dispositivo del Fin del Mundo", el cual se activaría automáticamente en caso de detectar un ataque nuclear sobre territorio de la Unión Soviética, destruyendo toda vida sobre la faz de la Tierra por contaminación radiactiva.
		`;

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
		<><MovieInfoElement item={item} /></>
	);
}

export default MovieInfo;
