import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/store";
import WeatherCard from "./WeatherCard";

const WeatherDisplayWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: white;
`;

const Time = styled.div`
	font-size: 0.8rem;
`;

const TempWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

const WeatherDisplay: React.FC = () => {
	let weatherData = useSelector((state: RootState) => state.weather);

	console.log(weatherData);
	let iconPath;
	iconPath = `http://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`;

	const date = new Date().toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const time = new Date().toLocaleTimeString("en-US");

	console.log(date);
	console.log(time);

	if (weatherData.name === "") {
		return <div></div>;
	}

	return (
		<WeatherDisplayWrapper>
			<img src={iconPath} alt={weatherData?.name} />
			<h2>{weatherData?.name}</h2>
			<Time>{`${date} | ${time}`}</Time>
			<p>{weatherData?.weather[0].description}</p>
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
		</WeatherDisplayWrapper>
	);
};

export default WeatherDisplay;
