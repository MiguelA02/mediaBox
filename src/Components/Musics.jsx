import React from "react";
import { useSelector } from "react-redux";
import { CardAlbum } from "./CardAlbum";
import { CardArtist } from "./CardArtist";
import { CardSong } from "./CardSong";
import { Nav } from "./Nav";
import s from "../Styles/HomeMovie.module.css";

export const Musics = () => {
  const music = useSelector((state) => state.multiSearch);
  if (music.length === 0) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      <Nav movie={false} />
      <div className={s.Container}>
        <h1>Artist</h1>
        <div className={s.ContanerCards}>
          {
            <CardArtist
              key={music[0].id}
              id={music[0].id}
              title={music[0].name}
              img={music[0].image_url}
            />
          }
        </div>
        <h1>Tops Albums</h1>
        <div className={s.ContanerCards}>
          {music[1].map((album) => (
            <CardAlbum
              key={album.id}
              id={album.id}
              img={album.cover_art_url}
              title={album.name}
            />
          ))}
        </div>
        <h1>Tops Songs</h1>
        <div className={s.ContanerCards}>
          {music[2].map((song) => (
            <CardSong
              key={song.id}
              id={song.id}
              title={song.title}
              img={song.song_art_image_thumbnail_url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
