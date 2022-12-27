import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import * as actions from '../Redux/actions'
import { Nav } from './Nav';
import s from '../Styles/MovieDetail.module.css'

export const ArtistDetail = () => {
    const dispatch = useDispatch();
    const {id} = useParams()
    const artistDetail = useSelector(state => state.artistDetails)
    const name = useSelector(state => state.movieName)
    useEffect(() => {
        
        dispatch(actions.getArtistDetails(id))
    },[])
    
  return (
    <div>
        <Nav movie={false}/>
        <div className={s.Container}>
            <div>
                <img src={artistDetail.image_url} alt="" className={s.image} />
            </div>
            <div className={s.details}>
                <h1>{name}</h1>
                <p>{artistDetail.description_preview}</p>
            </div>
        </div>
    </div>
  )
}
