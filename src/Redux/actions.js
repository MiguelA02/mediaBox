export const GET_ALL_MOVIES = "GET_ALL_MOVIES";
export const GET_ALL_MUSICS = "GET_ALL_MUSICS";
export const GET_MOVIES_BY_NAME = "GET_MOVIES_BY_NAME";
export const GET_MUSICS_BY_NAME = "GET_MUSICS_BY_NAME ";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
export const GET_MUSIC_DETAIL = "GET_MUSIC_DETAIL";
export const GET_MUSIC_BY_SEARCH = "GET_MUSIC_BY_SEARCH";
export const GET_ARTIST_DETAILS = "GET_ARTIST_DETAILS";
export const GET_ALBUM_DETAILS = "GET_ALBUM_DETAILS";
export const DELETE_INFORMATION = 'DELETE_INFORMATION;'
export const SAVE_NAME = "SAVE_NAME";
export const DELETE_DETAILS = "DELETE_DETAILS";
export const ADD_NEW = "ADD_NEW"
export const GET_MOVIE_CREATE_DETAILS = "GET_MOVIE_CREATE_DETAILS"
export const GET_MUSIC_CREATE_DETAILS = "GET_MUSIC_CREATE_DETAILS"

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '59bb996711msh1facf8569a94320p1a4181jsn4d47cfba46c1',
		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
	}
};
export const getPopularMovies = (page) => {
  return function (dispatch) {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=ff937c0bfa128ae2ad8692f1d8100921&language=en-US&page=${page}`
    )
      .then((res) => res.json())
      .then((res) => dispatch({ type: GET_ALL_MOVIES, payload: res }));
  };
};
export const getMoviesByName = (page, name) => {
  return function (dispatch) {
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ff937c0bfa128ae2ad8692f1d8100921&language=en-US&page=${page}&include_adult=false&query=${name}`
    )
      .then((res) => res.json())
      .then((res) => dispatch({ type: GET_MOVIES_BY_NAME, payload: res }));
  };
};
export const getMovieDetail = (id) => {
  return function (dispatch) {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ff937c0bfa128ae2ad8692f1d8100921&language=en-US`
    )
      .then((res) => res.json())
      .then((res) => dispatch({ type: GET_MOVIE_DETAIL, payload: res }));
  };
};
export const getMostPopularMusic = (page) => {
  return function (dispatch) {
    return fetch(
      `https://genius-song-lyrics1.p.rapidapi.com/songs/chart?time_period=month&chart_genre=all&per_page=10&page=${page}`,options)
      .then((response) => response.json())
      .then((res) => dispatch({ type: GET_ALL_MUSICS, payload: res.response.chart_items }));
  };
};
export const getMusicByName = (page, name) => {
  return function (dispatch) {
    return fetch(`https://genius-song-lyrics1.p.rapidapi.com/search?q=${name}&per_page=10&page=${page}`,options)
      .then((response) => response.json())
      .then((res) => dispatch({ type: GET_MUSICS_BY_NAME, payload: res.response.hits }));
  };
};
export const getMusicDetails = (id) => {
  return function(dispatch){
  return fetch(`https://genius-song-lyrics1.p.rapidapi.com/songs/${id}?text_format=dom`, options)
	.then(response => response.json())
	.then(res => dispatch({type: GET_MUSIC_DETAIL, payload: res.response.song}))
  }
}
export const getMusicBySearch = (prop) => {
  return function (dispatch){
    return fetch(`https://genius-song-lyrics1.p.rapidapi.com/search/multi?q=${prop}&per_page=5&page=1`, options)
    .then(response => response.json())
    .then(res => dispatch({type: GET_MUSIC_BY_SEARCH, payload: res.response.sections}))
  }
}
export const getArtistDetails = (id) => {
  return function(dispatch)
  {
    return fetch(`https://genius-song-lyrics1.p.rapidapi.com/artists/${id}?text_format=dom`, options)
    .then(response => response.json())
    .then(res => dispatch({type: GET_ARTIST_DETAILS, payload: res.response.artist}))
  }
}
export const getAlbumDetails = (id) => {
  return function(dispatch){
  return fetch(`https://genius-song-lyrics1.p.rapidapi.com/albums/${id}`, options)
	.then(response => response.json())
	.then(res => dispatch({type: GET_ALBUM_DETAILS, payload: res.response.album}))
  }
}
export const detailsMovieCreate = (id) => {
  return {type: GET_MOVIE_CREATE_DETAILS, payload: id}
}
export const detailsMusicCreate = (id) => {
  return {type: GET_MUSIC_CREATE_DETAILS, payload: id}
}
export const deleteDetails = (props) => {
  return {type: DELETE_DETAILS, payload: props}
}
export const saveName = (name) => {
  return {type: SAVE_NAME, payload: name}
}
export const deleteInfo = () => {
  return {type: DELETE_INFORMATION }
}
export const addNew = (obj) => {
  return {type: ADD_NEW, payload: obj}
}
