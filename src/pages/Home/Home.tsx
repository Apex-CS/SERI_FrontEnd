import React, { useEffect } from "react";
import { Carousel, List, Loader, MovieItem, NewsLetter } from "../../components";
import { useFetch } from "../../hooks";
import { Movies } from "../../types/types";
import "../../index.css";
 import {
 	carrouselData,
 	listDataTop10ComingTheatersTemp,
 	listDataTop10MoviesTemp,
 } from "../../resources/data/HomeData";

function Home() {
	const [listDataTop10Movies, setListDataTop10Movies] = React.useState<Movies[]>();
	const [listDataTop10ComingTheaters, setListDataTop10ComingTheaters] = React.useState<Movies[]>();
	const [carrouselList, setCarrouselList] = React.useState<Movies[]>();

	const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
	const response = useFetch(url);
	console.log("🚀 ~ file: Home.tsx:7 ~ Home ~ response:", response);

	const getTop10Movies = () => {
		/** Funcion que obtiene las 10 mejores peliculas calificadas en el sistema */
		return listDataTop10MoviesTemp;
	};

	const getComingSoonMovies = () => {
		/**
		 * Funcion que obtendra las ultimas peliculas que estan por estrenarse segun el sistema
		 * Falta definir el numero que se obtendra o si sera una lista dinamica... etc
		 */
		return listDataTop10ComingTheatersTemp;
	};

	const getMoviesReleased = () => {
		/**
		 * Funcion que obtendra las peliculas actuales para ver en el cine
		 * y lo enviara a un componente <List> en particular
		 */
	};

	const getCarrouselMovies = () => {
		// funcion que obtiene las peliculas que se mostraran en
		// el component carrousel
		// NOTA: aun queda por definir que peliculas se mostraran en el coarrousel
		return carrouselData;
	};

	useEffect(() => {
		setTimeout(() => {
			console.log("TimeOut");
			setListDataTop10Movies(getTop10Movies());
			setListDataTop10ComingTheaters(getComingSoonMovies());
			setCarrouselList(getCarrouselMovies());
		}, 6000);
	}, []);

	return (
		<div className='flex justify-center flex-col container mx-auto mt-4 mb-4'>
			<div className='w-full flex justify-between flex-row items-center'>
				<div
					id='container-list'
					className='flex row-auto justify-between w-3/4'>
					<div className='w-1/2'>
						<List
							title={"top 10 Movies"}
							data={listDataTop10Movies}
							redirect={true}
						/>
					</div>
					<div className='w-1/2'>
						<List
							title={"top 10 coming soon in Theaters"}
							data={listDataTop10ComingTheaters}
						/>
					</div>
				</div>
				<div
					id='newsLetter'
					className='w-1/4'>
					<NewsLetter />
				</div>
			</div>

			<Carousel
				show={4}
				// infiniteLoop
				withIndicator>
				{carrouselList ? (
					carrouselList.map((item) => (
						<MovieItem
							item={item}
							data-testid='carousel-item-1'
						/>
					))
				) : (
					<Loader />
				)}
			</Carousel>
		</div>
	);
}

export default Home;
