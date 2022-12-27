import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import image from '../img/Blue Modern Podcast Music Logo (1).png'
import { SearchBarMovie } from './SearchBarMovie';
import s from '../Styles/Nav.module.css'
export const Nav = (props) => {
  const navigate = useNavigate()
  return (
    <div className={s.container}>
      <div className={s.searchBarContainer}>
        <img src={image} alt="" className= {s.logo}/>
        <SearchBarMovie movie={props.movie}/>
        <div className={s.navItems}>
          <Link to={'/'} className = {s.item}>Movies</Link>
          <Link to={'/musics'} className = {s.item}>Musics</Link>
          {props.movie ? <button className={s.btn_Agregar} onClick ={() => navigate('/createMovie')}>Agregar</button> : <button className={s.btn_Agregar} onClick ={() => navigate('/createMusic')}>Agregar</button>}
        </div>
      </div>
    </div>
  )
}
