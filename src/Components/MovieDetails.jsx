import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as actions from '../Redux/actions'
import { Nav } from './Nav';
import s from '../Styles/MovieDetail.module.css'

export const MovieDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const detail = useSelector(state => state.movieDetail)
    useEffect(() => {
      dispatch(actions.deleteDetails('movie'))
      if(id[0] !== 'C'){
        dispatch(actions.getMovieDetail(id))
      }else{
        dispatch(actions.detailsMovieCreate(id.slice(1)))
      }
      
    },[])
  return (
    <div>
        <Nav movie={true}/>
        <div className={s.Container}>
          <div>
            <img src={`https://${detail.poster_path}`} alt="" className={s.image}/>
          </div>
          <div className={s.details}>
            <h1>{detail.original_title}</h1>
            <p><b>Duration: </b>{detail.runtime} min</p>
            <p><b>Release date: </b>{detail.release_date}</p>
            <p>{detail.overview}</p>
          </div>
        </div>
        
    </div>
  )
}
