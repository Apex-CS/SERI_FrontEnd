import { Movies } from "../../types/types";
const MAX_NUMBER_ID = 99999999;
const setIDMovie = () => {
	return Math.round(Math.random() * MAX_NUMBER_ID);
};

const carrouselData: Movies[] = [
	{ 
		title: "A Man Called Otto", 
		likes: Math.round(Math.random() * 100),
		id: setIDMovie(),
		poster: 'https://m.media-amazon.com/images/M/MV5BNzg3OTEzMTgtYWU0OC00YTI0LWIxOTAtNmRkNTc0Nzg2YWU1XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_FMjpg_UX1000_.jpg',
	},
	{
		title: "Everything Everywhere All at Once ",
		likes: Math.round(Math.random() * 100),
		id: setIDMovie(),
		poster: 'https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_FMjpg_UX1000_.jpg',
	},
	{ 
		title: "Missing",
		likes: Math.round(Math.random() * 100),
		id: setIDMovie(),
		poster: 'https://m.media-amazon.com/images/M/MV5BNWExMzg3NjAtZmZmYy00MWE3LWJkNjEtOTYzYTZjYTZkMjZiXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_FMjpg_UX1000_.jpg',
	},
	{
		title: "Palm Trees and Power Lines",
		likes: Math.round(Math.random() * 100),
		id: setIDMovie(),
		poster: 'https://m.media-amazon.com/images/M/MV5BNmQ3OTZlYzktNzQ3YS00ODViLTkwYTAtYjdmYTZkZmE2NmUzXkEyXkFqcGdeQXVyNjA3NTEwODY@._V1_.jpg',
	},
	{ 
		title: "The Whale",
		likes: Math.round(Math.random() * 100),
		id: setIDMovie(),
		poster: 'https://m.media-amazon.com/images/M/MV5BZDQ4Njg4YTctNGZkYi00NWU1LWI4OTYtNmNjOWMyMjI1NWYzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_FMjpg_UX1000_.jpg',
	 },
	{
		title: "This Is Where I Leave You",
		likes: Math.round(Math.random() * 100),
		id: setIDMovie(),
		poster: 'https://m.media-amazon.com/images/M/MV5BMjkzNzQ2NDMyNl5BMl5BanBnXkFtZTgwMTY3MTcxMjE@._V1_FMjpg_UX1000_.jpg',
	},
	{ 
		title: "Triangle of Sadness",
		likes: Math.round(Math.random() * 100),
		id: setIDMovie(),
		poster: 'https://m.media-amazon.com/images/M/MV5BNDRiZjc0ZDMtMjhlYi00ZjAzLTg0MDQtZDI2NGEyYTBlN2M2XkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_FMjpg_UX1000_.jpg',
	 },
	{ 
		title: "All That Breathes",
		likes: Math.round(Math.random() * 100),
		id: setIDMovie(),
		poster: 'https://m.media-amazon.com/images/M/MV5BNzQxMGNhZmUtODllYi00Yjk4LTgyM2YtMTJhZTIyZTk0YmEwXkEyXkFqcGdeQXVyMjMyMzI4MzY@._V1_FMjpg_UX1000_.jpg',
	 },
	{
		title: "The Banshees of Inisherin",
		likes: Math.round(Math.random() * 100),
		id: setIDMovie(),
		poster: 'https://m.media-amazon.com/images/M/MV5BM2NlZDI0ZDktNTg5OS00ZjQ1LWI4MDEtN2I0MDE5NWRiNzA4XkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_.jpg',
	},
];

const listDataTop10MoviesTemp: Movies[] = [
	{
		title: "Chris Rock: Selective Outrage",
		likes: Math.round(Math.random() * 100),
		id: setIDMovie(),
	},
	{
		title: "Everything Everywhere All at Once Everything Everywhere All at Once",
		likes: Math.round(Math.random() * 100),
		id: setIDMovie(),
	},
	{ title: "Missing", likes: Math.round(Math.random() * 100), id: setIDMovie() },
	{
		title: "Palm Trees and Power Lines",
		likes: Math.round(Math.random() * 100),
		id: setIDMovie(),
	},
	{ title: "The Whale", likes: Math.round(Math.random() * 100), id: setIDMovie() },
	{
		title: "This Is Where I Leave You",
		likes: Math.round(Math.random() * 100),
		id: setIDMovie(),
	},
	{ title: "Triangle of Sadness", likes: Math.round(Math.random() * 100), id: setIDMovie() },
	{ title: "All That Breathes", likes: Math.round(Math.random() * 100), id: setIDMovie() },
	{ title: "A Man Called Otto", likes: Math.round(Math.random() * 100), id: setIDMovie() },
	{
		title: "The Banshees of Inisherin",
		likes: Math.round(Math.random() * 100),
		id: setIDMovie(),
	},
];

const listDataTop10ComingTheatersTemp: Movies[] = [
	{
		title: "Chris Rock: Selective Outrage",
		likes: Math.round(Math.random() * 100),
		id: setIDMovie(),
	},
	{
		title: "Everything Everywhere All at Once",
		likes: Math.round(Math.random() * 100),
		id: setIDMovie(),
	},
	{ title: "Missing", likes: Math.round(Math.random() * 100), id: setIDMovie()},
	{
		title: "Palm Trees and Power Lines",
		likes: Math.round(Math.random() * 100),
		id: setIDMovie(),
	},
	{ title: "The Whale", likes: Math.round(Math.random() * 100), id: setIDMovie()},
	{
		title: "This Is Where I Leave You",
		likes: Math.round(Math.random() * 100),
		id: setIDMovie(),
	},
	{ title: "Triangle of Sadness", likes: Math.round(Math.random() * 100), id: setIDMovie()},
	{ title: "All That Breathes", likes: Math.round(Math.random() * 100), id: setIDMovie()},
	{ title: "A Man Called Otto", likes: Math.round(Math.random() * 100), id: setIDMovie()},
	{
		title: "The Banshees of Inisherin",
		likes: Math.round(Math.random() * 100),
		id: setIDMovie(),
	},
];

export { carrouselData, listDataTop10ComingTheatersTemp, listDataTop10MoviesTemp };
