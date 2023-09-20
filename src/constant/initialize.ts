import {
  MovieCreditDetailsInterface,
  MovieDetailsInterface,
  DramaDetailsInteface,
  DramaCreditDetailsInterface,
  trendingInterface,
} from "../interface/interface";
import { ShowState, ViewState } from "../interface/redux.interface";
import { ShowTypeConst, ViewTypeConst } from "./constants";

export const MovieDetailsInit: MovieDetailsInterface = {
  adult: false,
  backdrop_path: "",
  belongs_to_collection: {},
  budget: 0,
  genres: [],
  homepage: "",
  id: 0,
  imdb_id: "",
  original_language: "",
  original_title: "",
  overview: "",
  popularity: 0,
  poster_path: "",
  production_companies: [],
  production_countries: [],
  release_date: "",
  revenue: 0,
  runtime: 0,
  spoken_languages: [],
  status: "",
  tagline: "",
  title: "",
  video: false,
  vote_average: 0,
  vote_count: 0,
};

export const MovieCreditInit: MovieCreditDetailsInterface = {
  id: 0,
  cast: [],
  crew: [],
};

export const DramaDetailsInit: DramaDetailsInteface = {
  adult: false,
  backdrop_path: "",
  created_by: [],
  episode_run_time: [],
  first_air_date: "",
  genres: [],
  last_air_date: "",
  last_episode_to_air: {},
  name: "",
  next_episode_to_air: {
    id: 0,
    name: "",
    overview: "",
    vote_average: 0,
    vote_count: 0,
    air_date: "",
    episode_number: 0,
    episode_type: "",
    production_code: "",
    runtime: "",
    season_number: 0,
    show_id: 0,
    still_path: "",
  },
  networks: [],
  original_language: "",
  original_name: "",
  overview: "",
  popularity: 0,
  poster_path: "",
  production_companies: [],
  production_countries: [],
  seasons: [],
  spoken_languages: [],
  status: "",
  tagline: "",
  type: "",
  vote_average: 0,
  vote_count: 0,
};

export const DramaCreditInit: DramaCreditDetailsInterface = {
  id: 0,
  cast: [],
  crew: [],
};

export const SelectedDataInit: trendingInterface = {
    adult: false,
    backdrop_path: "",
    genre_ids: [],
    id: 0,
    original_language: "",
    original_name: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    release_date: "",
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0,
    media_type: ''
};

export const fetchDataInitialState = {
  data: [],
  totalPages: 0,
  isLoading: false,
  error: null,
  page: 1,
};

export const viewTypeInitialState: ViewState = {
  viewType: ViewTypeConst.GRID,
};

export const showTypeInitialState: ShowState = {
  showType: ShowTypeConst.MOVIE,
};
