import React from "react";
import style from "../modules/City.module.css"

function City({city}){
    return(
        <div>
            <div className={style.CityContainer}>
                <h2>{city.name}</h2>
                <div className={style.CityDescription}>
                    <div>Temperatura: {city.temp} ºC</div>
                    <div>Clima: {city.weather}</div>
                    <div>Viento: {city.wind} km/h</div>
                    <div>Cantidad de nubes: {city.clouds}</div>
                    <div>Latitud: {city.latitud}º</div>
                    <div>Longitud: {city.longitud}º</div>
                </div>
            </div>
        </div>
    )
}

export default City;