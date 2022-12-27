import React from "react";
import { useNavigate } from "react-router-dom";
import s from "../Styles/CardMovie.module.css";

export const CardArtist = (props) => {
  const navigate = useNavigate()
  return (
    <div className={s.container} onClick={() => navigate(`/ArtistDetails/${props.id}`)}>
      <img src={props.img} alt="" className={s.imageCard} />
      <h3 className={s.title}>{props.title}</h3>
    </div>
  );
};
