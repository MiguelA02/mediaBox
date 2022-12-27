import * as actions from "./actions";
const initialState = {
  allMovie: [],
  movieDetail: {},
  allMusics: [],
  musicDetails: {},
  artistDetails: {},
  albumDetails: {},
  multiSearch: [],
  movieCreated: [],
  musicCreated: [],
  movieName: '',
  update: true,
  totalPagesMovies: 0,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ALL_MOVIES:
      let array = action.payload.results.map((movie) => {
        return {
          ...movie,
          backdrop_path: `image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
          poster_path: `image.tmdb.org/t/p/w500/${movie.poster_path}`,
          created: false
        };
      });
      return {
        ...state,
        allMovie: array,
        totalPagesMovies: action.payload.total_pages,
      };
    case actions.GET_MOVIES_BY_NAME:
      let moviesByname = action.payload.results.map((movie) => {
        return {
          ...movie,
          backdrop_path: `image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
          poster_path: `image.tmdb.org/t/p/w500/${movie.poster_path}`,
        };
      });
      return {
        ...state,
        allMovie: moviesByname,
        totalPagesMovies: action.payload.total_pages,
      };
    case actions.GET_MOVIE_DETAIL:
      
        action.payload = {
          ...action.payload,
          backdrop_path: `image.tmdb.org/t/p/w500/${action.payload.backdrop_path}`,
          poster_path: `image.tmdb.org/t/p/w500/${action.payload.poster_path}`
        }
      return{...state, movieDetail: action.payload}
    case actions.GET_ALL_MUSICS:
        let allMusic = action.payload.map(music => music.item)
        return({...state, allMusics: allMusic})
    case actions.GET_MUSICS_BY_NAME:
      let allMusicsByName = action.payload.map(music => music.result);
      return {...state, allMusics: allMusicsByName};
    case actions.GET_MUSIC_DETAIL:
        return{...state,musicDetails: action.payload}
    case actions.GET_ARTIST_DETAILS:
      return {...state, artistDetails: action.payload}
    case actions.GET_ALBUM_DETAILS:
      return {...state, albumDetails: action.payload}
    case actions.GET_MUSIC_BY_SEARCH:
      let albums = action.payload[4].hits.map(album => album.result)
      let songs = action.payload[1].hits.map(song => song.result)
      return{...state, multiSearch: [action.payload[3].hits[0].result, albums, songs]}
    case actions.SAVE_NAME:
      return {...state, movieName: action.payload}
    case actions.DELETE_INFORMATION:
      return {...state, allMovie: []}
    case actions.ADD_NEW:
      if(action.payload.type === 'Movie') return {...state, movieCreated: [...state.movieCreated, action.payload]}
      if(action.payload.type === 'Song') return {...state, musicCreated: [...state.musicCreated, action.payload ]}
    case actions.GET_MOVIE_CREATE_DETAILS:
      return({...state, movieDetail: state.movieCreated[parseInt(action.payload)]})
    case actions.GET_MUSIC_CREATE_DETAILS:
      return ({...state, musicDetails: state.musicCreated[parseInt(action.payload)]})
    case actions.DELETE_DETAILS:
      let op = action.payload;
      if(op === 'artist') return {...state, artistDetails: {}}
      if(op === 'song') return {...state, musicDetails: {}}
      if(op === 'album') return {...state, albumDetails: {}}
      if(op === 'movie') return {...state, movieDetail: {}}
      
    default: return state;
  }
}
export default rootReducer;
