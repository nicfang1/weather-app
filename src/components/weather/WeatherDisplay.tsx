import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/store";
import WeatherCard from "./WeatherCard";

const WeatherDisplayWrapper = styled.div`
	background-color: white;
	margin-top: 2rem;
	border-radius: 2em;
	padding: 1em 2em;
`;

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

const CurrentTempWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const TempWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
`;

const WeatherDisplay: React.FC = () => {
	let weatherData = useSelector((state: RootState) => state.weather);

	console.log(weatherData);
	let iconPath;
	iconPath = `http://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`;

	if (weatherData.name === "") {
		return <div></div>;
	}

	return (
		<WeatherDisplayWrapper>
			<div>
				<h2>Current Weather</h2>
			</div>
			<Wrapper>
				<div>
					<h2>{weatherData?.name}</h2>
					<CurrentTempWrapper>
						<img src={iconPath} alt={weatherData?.name} />
						<h3>{weatherData.main.temp}</h3>
					</CurrentTempWrapper>
					<p>{weatherData?.weather[0].description}</p>
				</div>
				<TempWrapper>
					<WeatherCard
						title="Lowest Temperature"
						temp={weatherData?.main.temp_min}
					/>
					<WeatherCard
						title="Current Temperature"
						temp={weatherData?.main.temp}
					/>
					<WeatherCard
						title="Highest Temperature"
						temp={weatherData?.main.temp_max}
					/>
				</TempWrapper>
			</Wrapper>
		</WeatherDisplayWrapper>
	);
};

export default WeatherDisplay;
