import React from "react";
import styled from "styled-components";
import { WeatherData } from "../../interfaces/app_interfaces";
import WeatherCard from "./WeatherCard";

interface Props {
	weatherData: WeatherData | undefined;
}

const WeatherDisplayWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Time = styled.div`
	font-size: 0.8rem;
`;

const TempWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

const WeatherDisplay: React.FC<Props> = ({ weatherData }) => {
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
