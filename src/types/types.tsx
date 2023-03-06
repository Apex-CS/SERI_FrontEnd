////// Movies
export type Movies = {
    id: number | string,
    title: string,
    poster: any, // esto sera una imagen
    synopsis: string,
    originalLanguage: number,
    release_date: Date,
    duration: number,
    likes: number,
    createdDate: Date,
    ModifiedDate: Date,
    createdBy: number,
    modifiedBy: number,
};

export type MoviesGenre = {
    id: number | string,
    movieId: number,
    genreId: number
};

export type GenreCat = {
    id: number | string,
    description: string
};



export type Tags = {
    id: number | string,
    description: string,

};

export type MoviesTags = {
    id: number | string,
    movieId: number,
    tagId: number,
};

export type languages_cat = {
    id : number | string,
    name: string,
};

export type Reviews = {
    id: number | string,
    moviewId: number,
    userId: number,
    review: string,
};

export type Rates = {
    id: number | string,
    moviewId: number,
    userId: number,
    rate: number
};

export type MoviesCollaborators = {
    id: number | string,
    moviewId: number,
    collaboratorId: number,
};

export type MoviesHostedOn = {
    id: number | string,
    moviewId: number,
    stramingPlatformId: number,
};

export type ClassificationCat = {
    id: number | string,
    description: string,
};



export type MoviesClasification = {
    id: number | string,
    moviewId: number,
    clasificartionId: number,
};

export type Collaborators = {
    id: number | string,

};

export type RolesCat = {
    id: number | string,

};

export type StreamingPlatformsCat = {
    id: number | string,
    name: string,
    logo: Blob, // Si no tambien hacerlo con Any
};


//////7 USERS

export type Users = {
    id: number | string,

};

export type UsersRol = {
    id: number | string,

};





