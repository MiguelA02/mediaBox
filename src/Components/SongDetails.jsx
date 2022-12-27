import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as actions from "../Redux/actions.js";
import { Nav } from "./Nav.jsx";
import s from "../Styles/MovieDetail.module.css";
export const SongDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const song = useSelector((state) => state.musicDetails);

  useEffect(() => {
    dispatch(actions.deleteDetails("song"));

    if(id[0] !== 'M'){
      dispatch(actions.getMusicDetails(id))
    }else{
      dispatch(actions.detailsMusicCreate(id.slice(1)))
    }
  }, []);

  if (!song.id) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <Nav movie={false} />
      <div className={s.Container}>
        <div>
          <img
            src={
              !song.custom_song_art_image_url
                ? song.header_image_thumbnail_url
                : song.custom_song_art_image_url
            }
            alt=""
            className={s.image}
          />
        </div>
        <div className={s.details}>
          <p>
            <b>Title: </b> {song.title}
          </p>
          <p>
            <b>Artist: </b> {song.artist_names}
          </p>
          <p>
            <b>Release Date: </b>
            {song.release_date}
          </p>
          <p>
            <b>Description: </b>
            {song.description_preview}
          </p>
        </div>
      </div>
    </div>
  );
};
