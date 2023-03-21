import { Movies } from "../../types/types";
const MAX_NUMBER_ID = 99999999;
const setIDMovie = () => {
	return Math.round(Math.random() * MAX_NUMBER_ID);
};

const carrouselData: Movies[] = [
	{ title: "A Man Called Otto", likes: Math.round(Math.random() * 100), id: setIDMovie() },
	{
		title: "Everything Everywhere All at Once",
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

const listDataTop10MoviesTemp: Movies[] = [
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
