const API_KEY = "2dca580c2a14b55200e784d157207b4d";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_BASE = "https://image.tmdb.org/t/p";

export const getImageUrl = (path, size = "w500") =>
  path ? `${IMG_BASE}/${size}${path}` : "/placeholder.svg";

export const getBackdropUrl = (path) =>
  getImageUrl(path, "original");

async function tmdbFetch(endpoint, params = {}) {
  const url = new URL(`${BASE_URL}${endpoint}`);
  url.searchParams.set("api_key", API_KEY);
  url.searchParams.set("language", "es-ES");
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== "") url.searchParams.set(k, String(v));
  });
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`TMDB Error: ${res.status}`);
  return res.json();
}

// Trending
export const getTrending = () =>
  tmdbFetch("/trending/all/week");

// Movies
export const getPopularMovies = (page = 1) =>
  tmdbFetch("/movie/popular", { page });

export const getTopRatedMovies = (page = 1) =>
  tmdbFetch("/movie/top_rated", { page });

export const discoverMovies = (params = {}) =>
  tmdbFetch("/discover/movie", { sort_by: "popularity.desc", ...params });

// TV
export const getPopularTV = (page = 1) =>
  tmdbFetch("/tv/popular", { page });

export const getTopRatedTV = (page = 1) =>
  tmdbFetch("/tv/top_rated", { page });

export const discoverTV = (params = {}) =>
  tmdbFetch("/discover/tv", { sort_by: "popularity.desc", ...params });

// Genres
export const getMovieGenres = () =>
  tmdbFetch("/genre/movie/list");

export const getTVGenres = () =>
  tmdbFetch("/genre/tv/list");

// Details
export const getMovieDetail = (id) =>
  tmdbFetch(`/movie/${id}`);

export const getTVDetail = (id) =>
  tmdbFetch(`/tv/${id}`);

// Credits
export const getMovieCredits = (id) =>
  tmdbFetch(`/movie/${id}/credits`);

export const getTVCredits = (id) =>
  tmdbFetch(`/tv/${id}/credits`);

// Similar
export const getSimilarMovies = (id) =>
  tmdbFetch(`/movie/${id}/similar`);

export const getSimilarTV = (id) =>
  tmdbFetch(`/tv/${id}/similar`);

// Videos
export const getMovieVideos = (id) =>
  tmdbFetch(`/movie/${id}/videos`, { language: "es-ES" });

export const getTVVideos = (id) =>
  tmdbFetch(`/tv/${id}/videos`, { language: "es-ES" });

// Search
export const searchMulti = (query) =>
  tmdbFetch("/search/multi", { query });