import React, {useEffect, useState} from 'react';
import axios from 'axios'
import SearchBar from './components/SearchBar';
import { WeatherData } from './interfaces/app_interfaces';
import WeatherDisplay from './components/weather/WeatherDisplay';
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex; 
flex-direction: column; 
align-items: center; 
  padding: 4em; 
  background-color: rgba(255, 255, 255, 0.2); 
  border-radius: 3em;
  backdrop-filter: blur(40px);
  border: solid 2px transparent; 
  background-clip: padding-box; 
  box-shadow: 10px 10px 10px rgba(46, 54, 68, 0.03); 
`

const App = () => {
  const [search, setSearch] = useState<string>("")
  const [response, setResponse] = useState<WeatherData>()

  useEffect(() => {
    axios({
      method: "GET", 
      url: "https://api.openweathermap.org/data/2.5/weather", 
      headers: {
        'Content-Type': 'application/json'
      }, 
      params: {
        q: search === "" ? "singapore" : search, 
        units: "metric",  
        appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY
      }, 
      responseType: 'json'
    }).then(response => {
      if (response) {
        setResponse(response.request.response)
      }
      }).catch(err => console.log(err))
  }, [search])

  return (
    <Wrapper >
      <SearchBar setSearch={setSearch} />
      <WeatherDisplay weatherData={response}/>
    </Wrapper>
  );
}

export default App;
