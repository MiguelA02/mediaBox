import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Nav } from './Nav'
import * as actions from "../Redux/actions";
import s from "../Styles/Form.module.css";
export const Form = () => {
  const state = useSelector((state) => state.movieCreated);
  const id = state.length;
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    id: "C" + id,
    original_title: "",
    release_date: "",
    runtime: 0,
    poster_path: "",
    type: "Movie",
    overview: "",
    created: true,
    vote_average: 0,
  });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.addNew(input));
    setInput({
      id: "C" + id,
      original_title: "",
      release_date: "",
      runtime: 0,
      poster_path: "",
      type: "Movie",
      overview: "",
      created: true,
      vote_average: 0
    })
  };
  return (
    <div >
      <Nav movie={true}/>
      <form onSubmit={handleSubmit} className={s.container}>
        <label htmlFor="">Title: </label>
        <input
          type="text"
          name="original_title"
          className={s.input}
          value={input.original_title}
          onChange={handleChange}
        />
        <label htmlFor="">Release date: </label>
        <input
          type="date"
          name="release_date"
          className={s.input}
          value={input.release_date}
          onChange={handleChange}
        />
        <label htmlFor="">Duration: </label>
        <input
          type="number"
          name="runtime"
          value={input.runtime}
          className={s.input}
          onChange={handleChange}
        />
        <label htmlFor="">Image: </label>
        <input
          type="text"
          name="poster_path"
          className={s.input}
          value={input.poster_path}
          onChange={handleChange}
        />
        <label htmlFor="">Rating</label>
        <input
          type="number"
          min={0}
          max={10}
          className={s.input}
          name="vote_average"
          value={input.vote_average}
          onChange={handleChange}
        />
        <label htmlFor="">Description</label>
        <textarea
          rows="4"
          cols="50"
          className={s.input}
          name="overview"
          value={input.overview}
          onChange={handleChange}
        />
        <button className={s.btn} type="submit">Add</button>
      </form>
    </div>
  );
};
