import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as actions from '../Redux/actions'
import { Nav } from './Nav'
import s from '../Styles/MovieDetail.module.css'

export const AlbumDetail = () => {
    const dispacth = useDispatch()
    const {id} = useParams()
    const albumDetail = useSelector(state => state.albumDetails)
    useEffect(() => {
        dispacth(actions.getAlbumDetails(id))
        dispacth(actions.deleteDetails('album'))
    },[])
  return (
    <div>
        <Nav movie={false}/>  
        <div className={s.Container}>
            <div>
                    <img src={albumDetail.cover_art_thumbnail_url} alt="" className={s.image}/>
            </div>
            <div className={s.details}>
                <h1>{albumDetail.name}</h1>
                <p>{albumDetail.description_preview}</p>
            </div>
        </div>
    </div>
  )
}
