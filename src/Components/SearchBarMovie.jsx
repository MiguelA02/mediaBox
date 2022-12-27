import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as action from '../Redux/actions.js'
import s from '../Styles/SearchBar.module.css'

export const SearchBarMovie = (props) => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(action.saveName(input))
    dispatch(action.deleteInfo())
    
    if(props.movie){
      navigate(`/movies/${input}`)
      dispatch(action.deleteInfo())
      dispatch(action.getMoviesByName(1, input))
    }else{
      navigate(`/musics/${input}`)
      dispatch(action.deleteInfo())
      dispatch(action.getMusicBySearch(input))
    }
    setInput('')
  }

  return (
    <div>
      <input type="text"  value = {input} onChange={handleChange} className={s.searchBar}/>
      <button onClick={handleSubmit} className = {s.btnSearch}>Search</button>
    </div>
  )
}
