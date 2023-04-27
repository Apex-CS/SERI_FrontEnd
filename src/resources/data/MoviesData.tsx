import { Writer } from "../../types/types";
import { Star } from "../../types/types";
import { Director, GenreCat, Movies, StreamingPlatformsCat } from "../../types/types";
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
		id: 1,
		description: "Action",
	},
	{
		id: 2,
		description: "Comedy",
	},
	{
		id: 3,
		description: "Drama",
	},
	{
		id: 4,
		description: "Fantasy",
	},
	{
		id: 5,
		description: "Horror",
	},
	{
		id: 6,
		description: "Mystery",
	},
	{
		id: 7,
		description: "Romance",
	},
	{
		id: 8,
		description: "Thriller",
	},
	{
		id: 9,
		description: "Western",
	},
	{
		id: 10,
		description: "War and military action",
	},
	{
		id: 11,
		description: "Spy and espionage action",
	},
	{
		id: 12,
		description: "Science fantasy",
	},
	{
		id: 13,
		description: "Cyberpunk",
	},
	{
		id: 14,
		description: "Space Opera",
	},
	{
		id: 15,
		description: "Action",
	},
	{
		id: 16,
		description: "Comedy",
	},
	{
		id: 17,
		description: "Drama",
	},
	{
		id: 18,
		description: "Fantasy",
	},
	{
		id: 19,
		description: "Horror",
	},
	{
		id: 20,
		description: "Mystery",
	},
	{
		id: 21,
		description: "Romance",
	},
	{
		id: 22,
		description: "Thriller",
	},
	{
		id: 23,
		description: "Western",
	},
	{
		id: 24,
		description: "War and military action",
	},
	{
		id: 25,
		description: "Spy and espionage action",
	},
	{
		id: 26,
		description: "Science fantasy",
	},
	{
		id: 27,
		description: "Cyberpunk",
	},
	{
		id: 28,
		description: "Space Opera",
	},
];

const StreamingPlatformData: StreamingPlatformsCat[] = [
	{
		id: 1,
		name: "Amazon Prime Video",
		logo: "https://www.citypng.com/public/uploads/preview/-11596295514wdrm03x1ui.png",
	},
	{
		id: 2,
		name: "Netflix",
		logo: "https://w7.pngwing.com/pngs/153/31/png-transparent-netflix-macos-bigsur-icon.png",
	},
	{
		id: 3,
		name: "Start +",
		logo: "https://w7.pngwing.com/pngs/591/520/png-transparent-star-plus-star-india-television-show-television-channel-net.png",
	},
	{
		id: 4,
		name: "HBO Max",
		logo: "https://www.citypng.com/public/uploads/preview/hbo-max-logo-hd-png-11663461870m9srh5j4us.png",
	},
	{
		id: 5,
		name: "Hulu",
		logo: "https://i.pcmag.com/imagery/reviews/0142ww1h6aRqMkc4gP3zfUo-21.fit_lim.size_240x136.v1603983170.png",
	},
	{
		id: 6,
		name: "Disney+",
		logo: "https://image.pngaaa.com/851/4786851-middle.png",
	},
	{
		id: 7,
		name: "Paramount +",
		logo: "https://i.pcmag.com/imagery/reviews/07EMZy0mk05ABjFzwCJoiJF-1.fit_lim.size_240x136.v1614827656.png",
	},
	{
		id: 8,
		name: "Mubi",
		logo: "https://i.pcmag.com/imagery/reviews/04sGtBF8zsdHEUiPOPn2bAj-1.fit_lim.size_240x136.v1592856977.png",
	},
	{
		id: 9,
		name: "Youtube",
		logo: "https://w7.pngwing.com/pngs/1009/93/png-transparent-youtube-computer-icons-logo-youtube-angle-social-media-share-icon.png",
	},
	{
		id: 10,
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

const StreamingPlatformListByMovieExample: StreamingPlatformsCat[] = [
	{id: 1, name: "Amazon Prime Video", logo: "https://www.citypng.com/public/uploads/preview/-11596295514wdrm03x1ui.png"},
	{id: 3, name: "Netflix", logo: "https://w7.pngwing.com/pngs/153/31/png-transparent-netflix-macos-bigsur-icon.png"},
	{id: 4, name: "Start +", logo: "https://w7.pngwing.com/pngs/591/520/png-transparen…-india-television-show-television-channel-net.png"},
]

const GenrsListDataByMovieExample: GenreCat[] = [
	{
		id: 13,
		description: "Cyberpunk",
	},
	{
		id: 14,
		description: "Space Opera",
	},
	{
		id: 26,
		description: "Science fantasy",
	},
];

const DirectorsListExample: Director[] = [
	{
		id: 1,
		name: 'Alfonso Cuarón',
	},
	{
		id: 2,
		name: 'Quentin Tarantino',
	},
	{
		id: 3,
		name: 'Martin Scorsese',
	},
	{
		id: 4,
		name: 'Stanley Kubrick',
	},
	{
		id: 5,
		name: 'Alfred Hitchcock',
	},

	{
		id: 6,
		name: 'Guillermo del Toro',
	},
	{
		id: 7,
		name: 'Alejandro González Iñárritu',
	},
	{
		id: 8,
		name: 'Akira Kurosawa',
	},
	{
		id: 9,
		name: 'Billy Wilder',
	},
	{
		id: 10,
		name: 'Francis Ford Coppola',
	},
	{
		id: 11,
		name: 'Woody Allen',
	},
	{
		id: 12,
		name: 'Luis Buñuel',
	},
	{
		id: 13,
		name: 'Pedro Almodóvar',
	},
];

const WritersListExample: Writer[] = [
	{
		id: 1,
		name: 'Robert McKee',
	},
	{
		id: 2,
		name: 'Guillermo Arriaga Jordán',
	},
	{
		id: 3,
		name: 'Syd Field',
	},
	{
		id: 4,
		name: 'Nick Hornby',
	},
	{
		id: 5,
		name: 'Billy Wilder',
	},
	{
		id: 6,
		name: 'Charlie Kaufman',
	},
	{
		id: 7,
		name: 'Tonino Guerra',
	},
	{
		id: 8,
		name: 'Alfred Hitchcock',
	},
	{
		id: 9,
		name: 'Woody Allen',
	},
	{
		id: 10,
		name: 'Jean-Claude Carrière',
	},
	{
		id: 11,
		name: 'Nora Ephron',
	},
	{
		id: 12,
		name: 'Luis Alcoriza',
	},
];

const StarsListTemp : Star[] = [
{
	name: 'Tom Hanks',
	id: 1,
},
{
	name: 'Samuel L. Jackson',
	id: 2,
},
{
	name: 'Leonardo DiCaprio',
	id: 3,
},
{
	name: 'Denzel Washington',
	id: 4,
},
{
	name: 'Tom Cruise',
	id: 5,
},
{
	name: 'Marlon Brando',
	id: 6,
},
{
	name: 'Al Pacino',
	id: 7,
},
{
	name: 'Joaquin Phoenix',
	id: 8,
},
{
	name: 'Will Smith',
	id: 9,
},
{
	name: 'Robert De Niro',
	id: 10,
},
{
	name: 'Johnny Depp',
	id: 11,
},
{
	name: 'Meryl Streep',
	id: 12,
},
{
	name: 'Harrison Ford',
	id: 13,
},
{
	name: 'Keanu Reeves',
	id: 14,
},
{
	name: 'Jack Nicholson',
	id: 15,
},
{
	name: 'Anthony Hopkins',
	id: 16,
},
{
	name: 'Charlize Theron',
	id: 17,
},
{
	name: 'Ryan Reynolds',
	id: 18,
},
{
	name: 'Ben Affleck',
	id: 19,
}
];



export { GenrsListData, moviesListData, StreamingPlatformData, TagsMovieExamples, MovieExample, StreamingPlatformListByMovieExample, WritersListExample, GenrsListDataByMovieExample, DirectorsListExample, StarsListTemp };
