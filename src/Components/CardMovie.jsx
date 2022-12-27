import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import s from "../Styles/CardMovie.module.css";
import star from "../img/white-medium-star.256x249.png";
export const CardMovie = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className={s.container}
        onClick={() => navigate(`/movie/${props.id}`)}
      >
        <img
          src={`https://${props.image}`}
          alt={props.title}
          className={s.imageCard}
        />
        <div className={s.containerRating}>
          <img
            src={star}
            alt=""
            width={20}
            height={20}
            className={s.ratingValue}
          />
          <p className={s.ratingValue}>{props.rating}</p>
        </div>
        <h3 className={s.title}>{props.title}</h3>
      </div>
    </div>
  );
};
