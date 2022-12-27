import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import {HomeMovie} from './Components/HomeMovie.jsx'
import {Movies} from './Components/Movies.jsx'
import {HomeMusic} from './Components/HomeMusic'
import { MovieDetails } from "./Components/MovieDetails";
import {Musics} from './Components/Musics.jsx'
import { SongDetails } from "./Components/SongDetails";
import {Form} from './Components/Form'
import { AlbumDetail } from "./Components/AlbumDetail";
import { ArtistDetail } from "./Components/ArtistDetail";
import { FormMusic } from "./Components/FormMusic";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeMovie/>}></Route>
          <Route path="/movies/:name" element={<Movies/>}></Route>
          <Route path="/musics" element={<HomeMusic/>}></Route>
          <Route path="/movie/:id" element = {<MovieDetails/>}/>
          <Route path="/musics/:name" element = {<Musics/>}/>
          <Route path="/songDetails/:id" element = {<SongDetails/>}/>
          <Route path="/createMovie" element = {<Form/>}/>
          <Route path="/createMusic" element = {<FormMusic/>}/>
          <Route path="/AlbumDetails/:id" element = {<AlbumDetail/>}/>
          <Route path="/ArtistDetails/:id" element = {<ArtistDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
