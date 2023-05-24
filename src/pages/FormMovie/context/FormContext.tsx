import React from "react";
import {
  Director,
  GenreCat,
  Star,
  StreamingPlatformsCat,
  Writer,
} from "../../../types/types";

export type ParamsType = {
  title: string;
  poster: string | File;
  languages?: string[];
  classification: string;
  classificationData?: string[];
  genres: GenreCat[];
  duration: number;
  synopsis: string;
  language: string;
  directorsData?: Director[];
  writersData?: Writer[];
  starsData?: Star[];
  writers?: Writer[];
  stars?: Star[];
  directors?: Director[];
  releasedDate?: Date;
  streamingsMovie?: StreamingPlatformsCat[];
  tags?: string[];
  tagInput?: string;
  streamingPlatforms?: StreamingPlatformsCat[];
  getDirector?: (directoValueSearch: string) => Director[];
  getStars?: (startValueSearch: string) => Star[];
  getWritters?: (writterValueSearch: string) => Writer[];
  onSubmitHandler?: () => void;
};

interface ParamsContextProps {
  params: ParamsType;
  setParams: (params: ParamsType) => void;
}

export const ParamsContext = React.createContext<ParamsContextProps>({
  params: {} as ParamsType,
  setParams: () => {},
});
