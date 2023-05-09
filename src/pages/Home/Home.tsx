import React, { useEffect } from "react";
import { Carousel, LabelTitle, List, Loader, CarrouselMovieItem, NewsLetter } from "../../components";
import { Movies } from "../../types/types";
import "../../index.css";
 import {
 	carrouselData,
 	listDataTop10ComingTheatersTemp,
 	listDataTop10MoviesTemp,
 } from "../../resources/data/homeData";

function Home() {
	const [listDataTop10Movies, setListDataTop10Movies] = React.useState<Movies[]>();
	const [listDataTop10ComingTheaters, setListDataTop10ComingTheaters] = React.useState<Movies[]>();
	const [carrouselList, setCarrouselList] = React.useState<Movies[]>([]);

	const getTop10Movies = () => {
		/** Funcion que obtiene las 10 mejores peliculas calificadas en el sistema */
		const newArray = listDataTop10MoviesTemp.sort((a,b) => b.likes - a.likes);
		return newArray;
	};

	const getComingSoonMovies = () => {
		/**
		 * Funcion que obtendra las ultimas peliculas que estan por estrenarse segun el sistema
		 * Falta definir el numero que se obtendra o si sera una lista dinamica... etc
		 */
		const newArray = listDataTop10ComingTheatersTemp.sort((a,b) => b.likes - a.likes);
		return newArray;
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
			setListDataTop10Movies(getTop10Movies());
			setListDataTop10ComingTheaters(getComingSoonMovies());
			setCarrouselList(getCarrouselMovies());
		}, 6000);
	}, []);

	return (
		<div className='flex justify-start items-center flex-col container mt-4 mb-4'>
			<div 
				className='flex w-full justify-start flex-row  items-center'>
				<div
					id='container-list'
					className='flex row-auto justify-between w-full'>
					<div className='w-1/2'>
						<List
							title={"TOP 10 MOVIES"}
							data={listDataTop10Movies}
							redirect={true}
						/>
					</div>
					<div className='w-1/2'>
						<List
							title={"COMING SOON TO THEATERS"}
							data={listDataTop10ComingTheaters}
							redirect={true}
						/>
					</div>
				</div>
				<div
					id='newsLetter'
					className='w-1/4'>
					<NewsLetter />
				</div>
			</div>

			<div 
				
				className="flex flex-col w-full">
				<div className="flex items-center w-full justify-start pt-8 pb-3 ml-6">
					<LabelTitle customClass="font-bold ml-1" title="MOVIES RELEASED TODAY" />
				</div>
				{
					carrouselList ? (<>
					{
						<Carousel
							show={4}
							withIndicator>
							{carrouselList.map((item) => (
								<CarrouselMovieItem
									item={item}
									data-testid='carousel-item-1'
								/>
							))}
						</Carousel>
					}
					</>) : ( <Loader /> )
				}
				<Carousel
					show={4}
					withIndicator>
					{carrouselList ? (
						carrouselList.map((item) => (
							<CarrouselMovieItem
								item={item}
								data-testid='carousel-item-1'
							/>
						))
					) : ( <Loader /> )}
				</Carousel>
			</div>
			
		</div>
	);
}

export default Home;
