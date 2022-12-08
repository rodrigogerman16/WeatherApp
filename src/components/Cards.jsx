import React from 'react';
import Card from './Card';
import style from '../modules/Cards.module.css';

export default function Cards({cities, onClose}) {
  return (
    <div className={style.Container}>
      {cities.map(ciudad => 
        (
        <Card
          temp={ciudad.temp}
          weather={ciudad.weather}          
          name={ciudad.name}
          img={`http://openweathermap.org/img/wn/${ciudad.img}@2x.png`}
          onClose={onClose}
          key={ciudad.id}
          id={ciudad.id}
        />
         ))
       }
    </div>
  )
};

