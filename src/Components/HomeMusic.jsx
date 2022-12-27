import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Nav } from './Nav'
import { SearchBarMovie } from './SearchBarMovie';
import {CardSong} from './CardSong'
import * as actions from '../Redux/actions'
import s from '../Styles/HomeMovie.module.css'
import loading from '../img/Spinner-1s-200px (4).gif'
export const HomeMusic = () => {
  const dispatch = useDispatch();
  const musics = useSelector(state => state.allMusics)
  const createdMusic = useSelector(state => state.musicCreated)
  const [page, setPage] = useState(1);
  const handlePrevious = (e) => {
    e.preventDefault()
    setPage(page - 1)
    actions.deleteInfo()
  }
  const handleNext = (e) => {
    e.preventDefault()
    setPage(page + 1)
    actions.deleteInfo()
  }
  useEffect(() => {
    dispatch(actions.getMostPopularMusic(page))
  },[page])
  if(musics.length === 0){

    return <div >
       <Nav movie = {false}/>
      <img src={loading} alt="" />
    </div>
  }
  let allSong = musics
  if(page === 1){
    allSong = createdMusic.concat(musics)
  }
  return (
    <div>
      <Nav movie = {false}/>
      <div className={s.Container}>
        <div className={s.ContanerCards}>
          {allSong.map(music => <CardSong key = {music.id} id = {music.id} img={music.song_art_image_url} title = {music.title}/>)}
        </div>
      </div>
       <div className={s.Paginator}>
       <button className = {s.btn_Paginator} onClick = {handlePrevious}>Previous</button>
      <p>{page}</p>
      <button className = {s.btn_Paginator} onClick={handleNext}>Next</button>
      </div> 
      
    </div>
  )
}
