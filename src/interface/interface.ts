export interface trendingInterface {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_name: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: [];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface popularMoviesInterface {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface popularDramaInterface {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: [];
  id: number;
  name: string;
  origin_country: [];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface movieInterface {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_name: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface genresInterface {
  id: number;
  name: string;
}

export interface languageInterface {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface belongs_to_collection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface MovieDetailsInterface {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {};
  budget: number;
  genres: [];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [];
  production_countries: [];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface NextEpisodeInterface {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: string;
  season_number: number;
  show_id: number;
  still_path: string;
}

export interface DramaDetailsInteface {
  adult: boolean;
  backdrop_path: string;
  created_by: [];
  episode_run_time: [];
  first_air_date: string;
  genres: [];
  last_air_date: string;
  last_episode_to_air: {};
  name: string;
  next_episode_to_air: NextEpisodeInterface;
  networks: [];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [];
  production_countries: [];
  seasons: [];
  spoken_languages: [];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export interface DetailsProps {
  selectedData: trendingInterface;
}

export interface MovieCastDetailsInterface {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface CrewDetailsInterface {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
}

export interface MovieCreditDetailsInterface {
  id: number;
  cast: MovieCastDetailsInterface[];
  crew: CrewDetailsInterface[];
}

export interface DramaCastDetailsInterface {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  character: string;
  credit_id: string;
  order: number;
}

export interface DramaCreditDetailsInterface {
  id: number;
  cast: DramaCastDetailsInterface[];
  crew: CrewDetailsInterface[];
}

export interface OnAirProps {
  fetchData: popularDramaInterface[];
  totalPages: number;
}

export interface PopularProps {
  showType: string;
}

export interface PopularMovieProps {
  fetchMovieData: popularMoviesInterface[];
}

export interface PopularDramaProps {
  fetchDramaData: popularDramaInterface[];
}

export interface DisplayMovieProps {
  fetchData: movieInterface[];
  totalPages: number;
}

export interface DisplayDramaProps {
  fetchData: popularDramaInterface[];
  totalPages: number;
}

export interface FetchResponseAPI {
  page: number;
  results:
    | movieInterface[]
    | popularMoviesInterface[]
    | popularDramaInterface[];
  total_pages: number;
  total_results: number;
}
