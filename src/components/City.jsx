import React from "react";
import style from "../modules/City.module.css"

function City({city}){
    return(
        <div>
            <div className={style.CityContainer}>
                <h2>{city.name}</h2>
                <div className={style.CityDescription}>
                    <div>Temp: {city.temp} ºC</div>
                    <div>Weather: {city.weather}</div>
                    <div>Wind: {city.wind} km/h</div>
                    <div>Amount of clouds: {city.clouds}</div>
                    <div>Latitude: {city.latitud}º</div>
                    <div>Length: {city.longitud}º</div>
                </div>
            </div>
        </div>
    )
}

export default City;