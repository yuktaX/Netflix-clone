const api_key = '2dad3caf847024da296ef3b30b438a1f'

const BASE_URL = 'https://api.themoviedb.org/3'

const requests = {
  fetchUpcoming:`${BASE_URL}/movie/upcoming?api_key=${api_key}&language=en-US`,
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${api_key}&language=en-US`,
  fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${api_key}&with_networks=213`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${api_key}&language=en-US`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${api_key}&language=en-US&with_genres=28`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${api_key}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${api_key}&language=en-US&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${api_key}&language=en-US&with_genres=10749`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${api_key}&language=en-US&with_genres=99`,
}

export default requests