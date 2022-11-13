import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import style from '../modules/SearchBar.module.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");

  const inputHandler = (e) => {
    setCity(e.target.value);
  }

  return(
  <div className={style.Container}>
    <input className={style.Input} onChange={inputHandler} type="search" name="search" id="search" placeholder='Search City...'/>
    <Link to="/">
    <button className={style.Btn} onClick={()=>{onSearch(city)}}>Add</button>
    </Link>
  </div>
  ) 
};