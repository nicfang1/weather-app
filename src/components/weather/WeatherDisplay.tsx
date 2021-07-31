import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/store";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

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
	gap: 1em;
`;

const TempWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 0;
`;

const WeatherDisplay: React.FC = () => {
	let weatherData = useSelector((state: RootState) => state.weather);

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
				<TempWrapper>
					<h2>{weatherData?.name}</h2>
					<CurrentTempWrapper>
						<img src={iconPath} alt={weatherData?.name} />
						<h3>{weatherData.main.temp}</h3>
					</CurrentTempWrapper>
					<p>{weatherData?.weather[0].description}</p>
				</TempWrapper>
				<TempWrapper>
					<h3>Feels like {weatherData.main.feels_like}</h3>
					<CurrentTempWrapper>
						<CurrentTempWrapper>
							<AiOutlineArrowUp />
							<h3>{weatherData.main.temp_max}</h3>
						</CurrentTempWrapper>
						<CurrentTempWrapper>
							<AiOutlineArrowDown />
							<h3>{weatherData.main.temp_min}</h3>
						</CurrentTempWrapper>
					</CurrentTempWrapper>
					<p>Humidity {weatherData.main.humidity}%</p>
					<p>Pressure {weatherData.main.pressure}kPa</p>
				</TempWrapper>
			</Wrapper>
		</WeatherDisplayWrapper>
	);
};

export default WeatherDisplay;
