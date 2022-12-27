import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../Redux/actions'
import s from '../Styles/Form.module.css'
import { Nav } from './Nav'

export const FormMusic = () => {
    const musicCreate = useSelector(state => state.musicCreated)
    let id = musicCreate.length;
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        id: 'M'+id,
        title: '',
        artist_names: '',
        custom_song_art_image_url: '',
        song_art_image_url: '',
        release_date: '',
        description_preview:'',
        
        type: 'Song'
    })

    const handleChange = (e) => 
    {
        if(e.target.name === 'custom_song_art_image_url'){
            setInput({...input, [e.target.name]: e.target.value, song_art_image_url: e.target.value })
        }else{
            setInput({...input, [e.target.name]: e.target.value})
        }
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(actions.addNew(input))
        setInput({
            id: 'M'+id,
            title: '',
            artist_names: '',
            custom_song_art_image_url: '',
            song_art_image_url: '',
            release_date: '',
            description_preview:'',
            type: 'Song'
        })
    }
  return (
    <div>
        <Nav movie={false}/>
        <form onSubmit = {handleSubmit} className={s.container}>
            <label htmlFor="">Title</label>
            <input type="text" name='title' value={input.title} onChange = {handleChange} className={s.input}/>
            <label htmlFor="">Artist</label>
            <input type="text" name='artist_names' value={input.artist_names} onChange = {handleChange} className={s.input}/>
            <label htmlFor="">Image</label>
            <input type="text" name='custom_song_art_image_url' value={input.custom_song_art_image_url} onChange = {handleChange} className={s.input}/>
            <label htmlFor="">Release date</label>
            <input type="date" name='release_date' value={input.release_date} onChange = {handleChange} className={s.input}/>
            <label htmlFor="">Description</label>
            <textarea  rows="4" cols="50" name='description_preview' value={input.description_preview} onChange = {handleChange} className={s.input}/>
            <button type='submit' className={s.btn}>Add</button>
        </form>
    </div>
  )
}
