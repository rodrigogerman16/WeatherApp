import React from 'react';
import card from '../modules/Card.module.css';
import { Link } from 'react-router-dom';



export default function Card({temp, weather, name, onClose, img, id}) {
  return (

  <div className={card.Box}>    
    <div className={card.BtnBox}>
      <button className={card.Btn} onClick={() => onClose(id)}>X</button>
    </div>
    <div className={card.Name}>
      <Link to={`/city/${id}`}>  
        <h1>{name}</h1>
      </Link>
    </div>
    <div className={card.TemperatureInfo}>
      <div className={card.Temperature}>
          <h4>{temp}º</h4> 
      </div>
      <div className={card.Img}>        
        <h4>{weather}</h4>   
        <img src={img} alt="Clima imagen"/>
      </div>
    </div>
  </div>
  
  )
};