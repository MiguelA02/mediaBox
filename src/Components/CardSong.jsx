import React from 'react'
import { useNavigate } from 'react-router-dom'
import s from "../Styles/CardMovie.module.css";

export const CardSong = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={s.container} onClick={() => navigate(`/songDetails/${props.id}`)}>
        <img className={s.imageCard} src={props.img} alt="" />
        <h3 className={s.title} >{props.title}</h3>
      </div>
    </div>
  )
}
