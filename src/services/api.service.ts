import {
  trendingInterface,
  movieInterface,
  MovieDetailsInterface,
  DramaDetailsInteface,
  popularDramaInterface,
  popularMoviesInterface,
  MovieCreditDetailsInterface,
  DramaCreditDetailsInterface,
} from "../interface/interface";

const fetchHeader = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTUzYmRkZGNiMGQxNjJhNmI0OWEzMzEyMWM0OGRiNSIsInN1YiI6IjY0ZDVlMWRjZDEwMGI2MDBhZGEwNjViMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hTRNv114THusMoyraZXWGg6nW_PgCG7fFZvnB5BQhJQ",
  },
};

export const getTrending = () => {
  return new Promise<trendingInterface[]>((resolve, reject) => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      fetchHeader
    )
      .then((res) => res.json())
      .then((res) => resolve(res.results))
      .catch((err) => reject(err));
  });
};

export const getPopularMovies = () => {
  return new Promise<popularMoviesInterface[]>((resolve, reject) => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      fetchHeader
    )
      .then((res) => res.json())
      .then((res) => resolve(res.results))
      .catch((err) => reject(err));
  });
};

export const getPopularDrama = () => {
  return new Promise<popularDramaInterface[]>((resolve, reject) => {
    fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      fetchHeader
    )
      .then((res) => res.json())
      .then((res) => resolve(res.results))
      .catch((err) => reject(err));
  });
};

export const getDramaOnAir = () => {
  return new Promise<popularDramaInterface[]>((resolve, reject) => {
    fetch(`https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1`, fetchHeader)
    .then((res) => res.json())
    .then((res) => resolve(res.results))
    .catch((err) => reject(err));;
  });
};

export const getMovieDetails = (id: number) => {
  return new Promise<MovieDetailsInterface>((resolve, reject) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      fetchHeader
    )
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const getMovieCreditDetails = (id: number) => {
  return new Promise<MovieCreditDetailsInterface>((resolve, reject) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      fetchHeader
    )
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const getDramaCreditDetails = (id: number) => {
  return new Promise<DramaCreditDetailsInterface>((resolve, reject) => {
    fetch(
      `https://api.themoviedb.org/3/tv/${id}/credits?language=en-US`,
      fetchHeader
    )
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const getDramaDetails = (id: number) => {
  return new Promise<DramaDetailsInteface>((resolve, reject) => {
    fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, fetchHeader)
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const getNowPlayingMovies = () => {
  return new Promise<movieInterface[]>((resolve, reject) => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      fetchHeader
    )
      .then((res) => res.json())
      .then((res) => resolve(res.results))
      .catch((err) => reject(err));
  });
};

export const getTopRatedMovies = () => {
  return new Promise<movieInterface[]>((resolve, reject) => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      fetchHeader
    )
      .then((res) => res.json())
      .then((res) => resolve(res.results))
      .catch((err) => reject(err));
  });
};