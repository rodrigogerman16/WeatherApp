import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import {Route} from 'react-router-dom';
import City from './components/City';
import About from './components/About';

function App() {
  const [cities, setCities] = useState([]); 

  const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
  
  function onSearch(ciudad){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
  .then(r => r.json())
  .then((recurso) => {
    if(recurso.main !== undefined){
      const ciudad = {
        min: Math.round(recurso.main.temp_min),
        max: Math.round(recurso.main.temp_max),
        img: recurso.weather[0].icon,
        id: recurso.id,
        wind: recurso.wind.speed,
        temp: Math.round(recurso.main.temp),
        name: recurso.name,
        weather: recurso.weather[0].main,
        clouds: recurso.clouds.all,
        latitud: recurso.coord.lat,
        longitud: recurso.coord.lon
      };
      setCities(oldCities => [...oldCities, ciudad]);
    } else {
      alert("City not found");
    }
  });
}

function onClose(id) {
  setCities(oldCities => oldCities.filter(ciudad => ciudad.id !== id));
}


  return (
    <div className="App">  
          <Route path="/">                
            <Nav onSearch={onSearch}/>
          </Route>

          <Route exact path="/">         
            <Cards cities={cities} onClose={onClose}/>
          </Route>

          <Route path="/about">        
            <About/>
          </Route>

          <Route exact path='/city/:cityId' render=          
          {
            ({match}) => 
            <City city={cities.filter((ciudad) => ciudad.id === parseInt(match.params.cityId))[0]}/>
          }
          />   
    </div>
  );
}

export default App;
