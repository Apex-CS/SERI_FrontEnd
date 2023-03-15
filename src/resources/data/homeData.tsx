import { Movies } from "../../types/types";

const carrouselData = [
	{ title: "A Man Called Otto", likes: Math.round(Math.random() * 100) },
	{
		title: "Everything Everywhere All at Once",
		likes: Math.round(Math.random() * 100),
	},
	{ title: "Missing", likes: Math.round(Math.random() * 100) },
	{
		title: "Palm Trees and Power Lines",
		likes: Math.round(Math.random() * 100),
	},
	{ title: "The Whale", likes: Math.round(Math.random() * 100) },
	{
		title: "This Is Where I Leave You",
		likes: Math.round(Math.random() * 100),
	},
	{ title: "Triangle of Sadness", likes: Math.round(Math.random() * 100) },
	{ title: "All That Breathes", likes: Math.round(Math.random() * 100) },
	{ title: "A Man Called Otto", likes: Math.round(Math.random() * 100) },
	{
		title: "The Banshees of Inisherin",
		likes: Math.round(Math.random() * 100),
	},
];

const listDataTop10MoviesTemp: Movies[] = [
	{
		title: "Chris Rock: Selective Outrage",
		likes: Math.round(Math.random() * 100),
	},
	{
		title: "Everything Everywhere All at Once",
		likes: Math.round(Math.random() * 100),
	},
	{ title: "Missing", likes: Math.round(Math.random() * 100) },
	{
		title: "Palm Trees and Power Lines",
		likes: Math.round(Math.random() * 100),
	},
	{ title: "The Whale", likes: Math.round(Math.random() * 100) },
	{
		title: "This Is Where I Leave You",
		likes: Math.round(Math.random() * 100),
	},
	{ title: "Triangle of Sadness", likes: Math.round(Math.random() * 100) },
	{ title: "All That Breathes", likes: Math.round(Math.random() * 100) },
	{ title: "A Man Called Otto", likes: Math.round(Math.random() * 100) },
	{
		title: "The Banshees of Inisherin",
		likes: Math.round(Math.random() * 100),
	},
];

const listDataTop10ComingTheatersTemp: Movies[] = [
	{
		title: "Chris Rock: Selective Outrage",
		likes: Math.round(Math.random() * 100),
	},
	{
		title: "Everything Everywhere All at Once",
		likes: Math.round(Math.random() * 100),
	},
	{ title: "Missing", likes: Math.round(Math.random() * 100) },
	{
		title: "Palm Trees and Power Lines",
		likes: Math.round(Math.random() * 100),
	},
	{ title: "The Whale", likes: Math.round(Math.random() * 100) },
	{
		title: "This Is Where I Leave You",
		likes: Math.round(Math.random() * 100),
	},
	{ title: "Triangle of Sadness", likes: Math.round(Math.random() * 100) },
	{ title: "All That Breathes", likes: Math.round(Math.random() * 100) },
	{ title: "A Man Called Otto", likes: Math.round(Math.random() * 100) },
	{
		title: "The Banshees of Inisherin",
		likes: Math.round(Math.random() * 100),
	},
];

export { carrouselData, listDataTop10ComingTheatersTemp, listDataTop10MoviesTemp };
