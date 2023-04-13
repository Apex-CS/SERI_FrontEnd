type IDElemnt = number | string

////// Movies
export type Movies = {
    id? : IDElemnt,
    title? : string,
    poster? : any, // esto sera una imagen
    synopsis? : string,
    originalLanguage? : string,
    release_date? : Date,
    duration? : number,
    likes? : number,
    createdDate? : Date,
    ModifiedDate? : Date,
    createdBy? : string,
    modifiedBy? : string,
    classification? : string,
};

export type MoviesGenre = {
    id: IDElemnt,
    movieId: number,
    genreId: number
};

export type GenreCat = {
    id: IDElemnt,
    description: string,
    selected?: boolean,
};

export type Tags = {
    id: IDElemnt,
    description: string,

};

export type MoviesTags = {
    id: IDElemnt,
    movieId: number,
    tagId: number,
};

export type LanguagesCat = {
    id : IDElemnt,
    name: string,
};

export type Reviews = {
    id: IDElemnt,
    moviewId: number,
    userId: number,
    review: string,
};

export type Rates = {
    id: IDElemnt,
    moviewId: number,
    userId: number,
    rate: number
};

export type MoviesCollaborators = {
    id: IDElemnt,
    moviewId: number,
    collaboratorId: number,
};

export type MoviesHostedOn = {
    id: IDElemnt,
    moviewId: number,
    stramingPlatformId: number,
};

export type ClassificationCat = {
    id: IDElemnt,
    description: string,
};



export type MoviesClasification = {
    id: IDElemnt,
    moviewId: number,
    clasificartionId: number,
};

export type Collaborators = {
    id: IDElemnt,

};

export type RolesCat = {
    id: IDElemnt,

};

export type StreamingPlatformsCat = {
    id: IDElemnt,
    name: string,
    logo: string, // Si no tambien hacerlo con Any
    select?: boolean,
};

export type Director = {
    id: IDElemnt,
    name: string,
}

export type Star = {
    id: IDElemnt,
    name: string,
}

export type Writer = {
    id: IDElemnt,
    name: string,
}


//////7 USERS

export type Users = {
    id: IDElemnt,

};

export type UsersRol = {
    id: IDElemnt,

};

export enum ClassificationCatEnum {
    A = 'A',
    AA = 'AA',
    B = 'B',
    B15 = 'B-15',
    C = 'C',
    NA = 'N/A',
    D = 'D',
}

export enum LanguageEnum {
    English= "English",
    Mandarin= "Mandarin",
    French= "French",
    Japanese= "Japanese",
    Spanish= "Spanish",
    Korean= "Korean",
    German= "German",
    Hindi= "Hindi",
    Cantonese= "Cantonese",
    Italian= "Italian",
    Russian= "Russian",
    Swedish= "Swedish",
    Arabic= "Arabic",
    Navi= "Na'vi",
    Latin= "Latin",
    Portuguese= "Portuguese",
    Hebrew= "Hebrew",
    Turkish= "Turkish",
    Polish= "Polish",
}



