import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardMovie } from "./CardMovie";
import * as actions from "../Redux/actions";
import { useParams } from "react-router-dom";
import { Nav } from './Nav'
import s from '../Styles/HomeMovie.module.css'

export const Movies = () => {
  const { name } = useParams();
  const movies = useSelector((state) => state.allMovie);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getMoviesByName(page, name));
  }, [movies]);

  const handlePrevious = (e) => {
    e.preventDefault();
    if(page !== 1){
      setPage(page - 1);
      dispatch(actions.deleteInfo())
    }
  };
  const handleNext = (e) => {
    e.preventDefault();
    if(movies.length === 20)
    {
      setPage(page + 1);
      dispatch(actions.deleteInfo())
    }
  };
 if(!movies){
  return <h1>Loading</h1>
 }else{
  return (
    <div>
      
      <Nav movie = {true}/>
      <div className={s.Container}>
        <div className={s.ContanerCards}>
          {movies.map((movie) => (
            <CardMovie
              key={movie.id}
              id={movie.id}
              image={movie.poster_path}
              title={movie.original_title}
              rating = {movie.vote_average}
            />
          ))}
        </div>
      </div>
      
      <div className={s.Paginator}>
        <button onClick = {handlePrevious} disabled = {page === 1} className = {s.btn_Paginator}>Previous</button>
        <p>{page}</p>
        <button onClick={handleNext} disabled = {movies.length !== 20} className = {s.btn_Paginator}>Next</button>
      </div>
    </div>
  );
    }
};
