import { GenreCat, Movies } from "../../types/types"
import { getRandomClassification, getRandomNumber } from "../../utils/utils"

const moviesListData: Movies[] = [
    {
        id: getRandomNumber(),
        poster: './movies-wallpaper/2001-space-odyssey.jpg',
        title: '2001 Space Odessey',
        duration: getRandomNumber(240),
        release_date: new Date(),
        likes: getRandomNumber(1000),
        classification: getRandomClassification(),
    },
    {
        id: getRandomNumber(),
        poster: './movies-wallpaper/2001-space-odyssey.jpg',
        title: '2001 Space Odessey',
        duration: getRandomNumber(240),
        release_date: new Date(),
        likes: getRandomNumber(1000),
        classification: getRandomClassification(),
    },
    {
        id: getRandomNumber(),
        poster: './movies-wallpaper/apocalypse-now.jpg',
        title: 'Apocalypse Now',
        duration: getRandomNumber(240),
        release_date: new Date(),
        likes: getRandomNumber(1000),
        classification: getRandomClassification(),
    },
    {
        id: getRandomNumber(),
        poster: './movies-wallpaper/dr-strangelove.jpg',
        title: 'Dr Strangelove',
        duration: getRandomNumber(240),
        release_date: new Date(),
        likes: getRandomNumber(1000),
        classification: getRandomClassification(),
    },
    {
        id: getRandomNumber(),
        poster: './movies-wallpaper/paprika.jpg',
        title: 'Paprika',
        duration: getRandomNumber(240),
        release_date: new Date(),
        likes: getRandomNumber(1000),
        classification: getRandomClassification(),
    },
    // {
    //     id: getRandomNumber(),
    //     poster: './resources/img/movies-wallpaper/perfect-blue.jpg',
    //     title: 'Perfect Blue',
    //     duration: getRandomNumber(240),
    //     release_date: new Date(),
    //     likes: getRandomNumber(1000),
    //     classification: getRandomClassification(),
    // },
]

const genrsListData: GenreCat[] = [
    {
        id: getRandomNumber(88),
        description: 'Accion',
    },
    {
        id: getRandomNumber(88),
        description: 'Comedia',
    },
    {
        id: getRandomNumber(88),
        description: 'Suspenso',
    },
    {
        id: getRandomNumber(88),
        description: 'Thriller',
    },
    {
        id: getRandomNumber(88),
        description: 'Terror',
    },
    {
        id: getRandomNumber(88),
        description: 'Romance',
    },
    {
        id: getRandomNumber(88),
        description: 'Documental',
    },
    {
        id: getRandomNumber(88),
        description: 'Crimen',
    },
    {
        id: getRandomNumber(88),
        description: 'Cine Negro',
    },
    {
        id: getRandomNumber(88),
        description: 'Clasico',
    },
    {
        id: getRandomNumber(88),
        description: 'Aventura',
    },
    {
        id: getRandomNumber(88),
        description: 'Sci Fi',
    },
    {
        id: getRandomNumber(88),
        description: 'Fantasia',
    },
    {
        id: getRandomNumber(88),
        description: 'Musical',
    },

]

export {
    genrsListData,
    moviesListData,
}