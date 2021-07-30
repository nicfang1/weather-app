import React from 'react'
import styled from 'styled-components'
import { WeatherData } from '../../interfaces/app_interfaces'
import WeatherCard from './WeatherCard'

interface Props {
    weatherData: WeatherData | undefined
}

const CardWrapper = styled.div`
    display: flex; 
    justify-content: space-evenly; 
`

const WeatherDisplay: React.FC<Props> = ({weatherData}) => {

    let iconPath
    iconPath = `http://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`
    console.log(weatherData?.weather)

    return (
        <div>
            <h2>{weatherData?.name}</h2>
            <h3>{weatherData?.main.temp}</h3>
            <CardWrapper>
                <WeatherCard title="Feels Like" temp={weatherData?.main.feels_like} />
                <WeatherCard title="Lowest Temperature" temp={weatherData?.main.temp_min} />
                <WeatherCard title="Highest temperature" temp={weatherData?.main.temp_max} />
            </CardWrapper>
            <img src={iconPath} alt="" />
        </div>
    )
}

export default WeatherDisplay
