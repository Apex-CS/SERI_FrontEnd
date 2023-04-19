import { GenreCat, Movies, StreamingPlatformsCat } from "../../types/types";
import { getRandomClassification, getRandomNumber } from "../../utils/utils";

const moviesListData: Movies[] = [
	{
		id: getRandomNumber(),
		poster: "./movies-wallpaper/2001-space-odyssey.jpg",
		title: "2001 Space Odessey",
		duration: getRandomNumber(240),
		release_date: new Date(),
		likes: getRandomNumber(1000),
		classification: getRandomClassification(),
	},
	{
		id: getRandomNumber(),
		poster: "./movies-wallpaper/2001-space-odyssey.jpg",
		title: "2001 Space Odessey",
		duration: getRandomNumber(240),
		release_date: new Date(),
		likes: getRandomNumber(1000),
		classification: getRandomClassification(),
	},
	{
		id: getRandomNumber(),
		poster: "./movies-wallpaper/apocalypse-now.jpg",
		title: "Apocalypse Now",
		duration: getRandomNumber(240),
		release_date: new Date(),
		likes: getRandomNumber(1000),
		classification: getRandomClassification(),
	},
	{
		id: getRandomNumber(),
		poster: "./movies-wallpaper/dr-strangelove.jpg",
		title: "Dr Strangelove",
		duration: getRandomNumber(240),
		release_date: new Date(),
		likes: getRandomNumber(1000),
		classification: getRandomClassification(),
	},
	{
		id: getRandomNumber(),
		poster: "./movies-wallpaper/paprika.jpg",
		title: "Paprika",
		duration: getRandomNumber(240),
		release_date: new Date(),
		likes: getRandomNumber(1000),
		classification: getRandomClassification(),
	},
];

const MAX_NUMBER_ID_GENRS = 88;
const GenrsListData: GenreCat[] = [
	{
		id: getRandomNumber(MAX_NUMBER_ID_GENRS),
		description: "Action",
	},
	{
		id: getRandomNumber(MAX_NUMBER_ID_GENRS),
		description: "Comedy",
	},
	{
		id: getRandomNumber(MAX_NUMBER_ID_GENRS),
		description: "Drama",
	},
	{
		id: getRandomNumber(MAX_NUMBER_ID_GENRS),
		description: "Fantasy",
	},
	{
		id: getRandomNumber(MAX_NUMBER_ID_GENRS),
		description: "Horror",
	},
	{
		id: getRandomNumber(MAX_NUMBER_ID_GENRS),
		description: "Mystery",
	},
	{
		id: getRandomNumber(MAX_NUMBER_ID_GENRS),
		description: "Romance",
	},
	{
		id: getRandomNumber(MAX_NUMBER_ID_GENRS),
		description: "Thriller",
	},
	{
		id: getRandomNumber(MAX_NUMBER_ID_GENRS),
		description: "Western",
	},
	{
		id: getRandomNumber(MAX_NUMBER_ID_GENRS),
		description: "War and military action",
	},
	{
		id: getRandomNumber(MAX_NUMBER_ID_GENRS),
		description: "Spy and espionage action",
	},
	{
		id: getRandomNumber(MAX_NUMBER_ID_GENRS),
		description: "Science fantasy",
	},
	{
		id: getRandomNumber(MAX_NUMBER_ID_GENRS),
		description: "Cyberpunk",
	},
	{
		id: getRandomNumber(MAX_NUMBER_ID_GENRS),
		description: "Space Opera",
	},
	{
		id: getRandomNumber(MAX_NUMBER_ID_GENRS),
		description: "Action",
	},
	{
		id: getRandomNumber(MAX_NUMBER_ID_GENRS),
		description: "Comedy",
	},
	{
		id: getRandomNumber(MAX_NUMBER_ID_GENRS),
		description: "Drama",
	},
	{
		id: getRandomNumber(MAX_NUMBER_ID_GENRS),
		description: "Fantasy",
	},
	{
		id: getRandomNumber(MAX_NUMBER_ID_GENRS),
		description: "Horror",
	},
	{
		id: getRandomNumber(MAX_NUMBER_ID_GENRS),
		description: "Mystery",
	},
	{
		id: getRandomNumber(MAX_NUMBER_ID_GENRS),
		description: "Romance",
	},
	{
		id: getRandomNumber(MAX_NUMBER_ID_GENRS),
		description: "Thriller",
	},
	{
		id: getRandomNumber(MAX_NUMBER_ID_GENRS),
		description: "Western",
	},
	{
		id: getRandomNumber(MAX_NUMBER_ID_GENRS),
		description: "War and military action",
	},
	{
		id: getRandomNumber(MAX_NUMBER_ID_GENRS),
		description: "Spy and espionage action",
	},
	{
		id: getRandomNumber(MAX_NUMBER_ID_GENRS),
		description: "Science fantasy",
	},
	{
		id: getRandomNumber(MAX_NUMBER_ID_GENRS),
		description: "Cyberpunk",
	},
	{
		id: getRandomNumber(MAX_NUMBER_ID_GENRS),
		description: "Space Opera",
	},
];

const StreamingPlatformData: StreamingPlatformsCat[] = [
	{
		id: Math.round(Math.random() * 15),
		name: "Amazon Prime Video",
		logo: "https://www.citypng.com/public/uploads/preview/-11596295514wdrm03x1ui.png",
	},
	{
		id: Math.round(Math.random() * 15),
		name: "Netflix",
		logo: "https://w7.pngwing.com/pngs/153/31/png-transparent-netflix-macos-bigsur-icon.png",
	},
	{
		id: Math.round(Math.random() * 15),
		name: "Start +",
		logo: "https://w7.pngwing.com/pngs/591/520/png-transparent-star-plus-star-india-television-show-television-channel-net.png",
	},
	{
		id: Math.round(Math.random() * 15),
		name: "HBO Max",
		logo: "https://www.citypng.com/public/uploads/preview/hbo-max-logo-hd-png-11663461870m9srh5j4us.png",
	},
	{
		id: Math.round(Math.random() * 15),
		name: "Hulu",
		logo: "https://i.pcmag.com/imagery/reviews/0142ww1h6aRqMkc4gP3zfUo-21.fit_lim.size_240x136.v1603983170.png",
	},
	{
		id: Math.round(Math.random() * 15),
		name: "Disney+",
		logo: "https://image.pngaaa.com/851/4786851-middle.png",
	},
	{
		id: Math.round(Math.random() * 15),
		name: "Paramount +",
		logo: "https://i.pcmag.com/imagery/reviews/07EMZy0mk05ABjFzwCJoiJF-1.fit_lim.size_240x136.v1614827656.png",
	},
	{
		id: Math.round(Math.random() * 15),
		name: "Mubi",
		logo: "https://i.pcmag.com/imagery/reviews/04sGtBF8zsdHEUiPOPn2bAj-1.fit_lim.size_240x136.v1592856977.png",
	},
	{
		id: Math.round(Math.random() * 15),
		name: "Youtube",
		logo: "https://w7.pngwing.com/pngs/1009/93/png-transparent-youtube-computer-icons-logo-youtube-angle-social-media-share-icon.png",
	},
	{
		id: Math.round(Math.random() * 15),
		name: "MGM+",
		logo: "https://i.pcmag.com/imagery/reviews/00H3zSdMq7ymk6OkkSbap8q-1.fit_lim.size_240x136.v1674227193.png",
	},
];

const TagsMovieExamples: string[] = [
	"Action",
	"Comedy",
	"Drama",
	"Fantasy",
	"Horror",
	"Mystery",
	"Romance",
	"Thriller",
	"Western",
	"Crime thriller",
	"Disaster thriller",
	"Psychological thriller",
	"Techno thriller",
	"War and military action",
	"Spy and espionage action",
	"Martial arts action",
	"Western shoot ‘em up action",
	"Action hybrid genres",
	"Slapstick comedy",
	"Screwball comedy",
	"Parody comedy",
	"Black comedy",
	"Zombie horror",
	"Folk horror",
	"Body Horror",
	"Found footage Horror",
	"Science fantasy",
	"Cyberpunk",
	"Space Opera",
	"Spaghetti Westerns",
	"Space Westerns",
	"Singing cowboy Westerns",
	"Comedy Westerns",
	"Neo-westerns",
	"Acid Westerns",
	"Meat Pie Westerns",
	"Charro Westerns",
	"Dacoit Westerns",
	"Documentary Westerns",
	"Historical Romance",
	"Romantic Drama",
	"Romantic Comedy",
	"Chick Flick",
	"Paranormal Romance",
];

const MovieExample: Movies = {
	id: getRandomNumber(),
	poster: "https://i.ytimg.com/vi/peMX_zlIIA4/movieposter_en.jpg",
	title: "2001 Space Odessey",
	duration: getRandomNumber(240),
	release_date: new Date('1968-04-02'),
	likes: 999,
	classification: 'C',
	originalLanguage: 'English',
	createdBy: 'Diego Campanero',
	createdDate: new Date(),
	synopsis: 'La secuencia del filme inicia con la imagen de la Tierra ascendiendo sobre la Luna, mientras que el Sol asciende a su vez sobre la Tierra, todos en alineación. En este momento comienza a escucharse la composición musical Así habló Zaratustra, de Richard Strauss, la misma que acompaña, en su mayoría, la primera parte de la película, titulada El amanecer del hombre.'	
}

export { GenrsListData, moviesListData, StreamingPlatformData, TagsMovieExamples, MovieExample };
