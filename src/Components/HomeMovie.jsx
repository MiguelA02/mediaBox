import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../Redux/actions'
import { CardMovie } from './CardMovie'
import { Nav } from './Nav'
import s from '../Styles/HomeMovie.module.css'
export const HomeMovie = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1)
  const movies = useSelector(state => state.allMovie)
  const moviesCreated = useSelector(state => state.movieCreated)

  useEffect(() => {
    dispatch(actions.getPopularMovies(page))
  },[page])
 
  const handlePrevious = (e) => {
    e.preventDefault()
    if(page - 1 !== 0){
      setPage(page - 1)
    }
    
    dispatch(actions.deleteInfo())
  }
  const handleNext = (e) => {
    e.preventDefault()
    setPage(page + 1)
    dispatch(actions.deleteInfo())
  }
  let allMovies = movies
  if(page === 1){
    allMovies = moviesCreated.concat(movies)
  }
  
  return (
    <div>
      <Nav movie = {true}/>
      <div className={s.Container}>
        {console.log(allMovies)}
        <div className={s.ContanerCards}>
          {
          allMovies.map(movie => <CardMovie key = {movie.id} id = {movie.id} image = {movie.poster_path} title = {movie.original_title} rating = {movie.vote_average} created = {movie.created}/>)
          }
        </div>
      </div>
      <div className={s.Paginator}>
        <button onClick = {handlePrevious} disabled = {page === 1} className = {s.btn_Paginator}>Previous</button>
        <p>{page}</p>
        <button onClick={handleNext} className = {s.btn_Paginator}>Next</button>
      </div>
    </div>
  )
}
