import {
  trendingInterface,
  movieInterface,
  MovieDetailsInterface,
  DramaDetailsInteface,
  MovieCreditDetailsInterface,
  DramaCreditDetailsInterface,
  FetchResponseAPI,
} from "../interface/interface";

const fetchHeader = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTUzYmRkZGNiMGQxNjJhNmI0OWEzMzEyMWM0OGRiNSIsInN1YiI6IjY0ZDVlMWRjZDEwMGI2MDBhZGEwNjViMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hTRNv114THusMoyraZXWGg6nW_PgCG7fFZvnB5BQhJQ",
  },
};

export const getOnAirDrama = (page: number) => {
  return new Promise<FetchResponseAPI>((resolve, reject) => {
    fetch(`https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=${page}`, fetchHeader)
    .then((res) => res.json())
    .then((res) => resolve(res))
    .catch((err) => reject(err));
  });
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

export const getPopularMovies = (page: number) => {
  return new Promise<FetchResponseAPI>((resolve, reject) => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
      fetchHeader
    )
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const getPopularDrama = (page: number) => {
  return new Promise<FetchResponseAPI>((resolve, reject) => {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}`,
      fetchHeader
    )
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const getNowPlayingMovies = (page: number) => {
  return new Promise<FetchResponseAPI>((resolve, reject) => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`,
      fetchHeader
    )
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const getNowPlayingDrama = (page: number) => {
  return new Promise<FetchResponseAPI>((resolve, reject) => {
    fetch(
      `https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=${page}`,
      fetchHeader
    )
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });  
};

export const getTopRatedMovies = (page: number) => {
  return new Promise<FetchResponseAPI>((resolve, reject) => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
      fetchHeader
    )
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const getTopRatedDrama = (page: number) => {
  return new Promise<FetchResponseAPI>((resolve, reject) => {
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${page}`,
      fetchHeader
    )
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const getUpcomingMovies = (page: number) => {
  return new Promise<FetchResponseAPI>((resolve, reject) => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`,
      fetchHeader
    )
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err));
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

export const getDramaDetails = (id: number) => {
  return new Promise<DramaDetailsInteface>((resolve, reject) => {
    fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, fetchHeader)
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