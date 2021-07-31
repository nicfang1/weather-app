import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/store";
import { convertToCelcius } from "../../store/tempUnitSlice";
import WeatherDetails from "./WeatherDetails";
import { iconPath } from "../../utils/icon-path";
import { tempConverter } from "../../utils/temp-converter";

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

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
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
	const dispath = useDispatch();
	const weatherData = useSelector((state: RootState) => state.weather);
	const changeTemp = useSelector((state: RootState) => state.toCelcius.celcius);

	const temp = `${tempConverter(weatherData.main.temp, changeTemp)}${
		changeTemp ? "°" : "K"
	}`;

	if (weatherData.name === "") {
		return <div></div>;
	}

	return (
		<WeatherDisplayWrapper>
			<Header>
				<h2>Current Weather</h2>
				<button
					onClick={() => {
						dispath(convertToCelcius());
					}}
				>
					{changeTemp ? "F" : "C"}
				</button>
			</Header>
			<Wrapper>
				<TempWrapper>
					<h2>{weatherData?.name}</h2>
					<CurrentTempWrapper>
						<img
							src={iconPath(weatherData.weather[0].icon)}
							alt={weatherData?.name}
						/>
						<h3>{temp}</h3>
					</CurrentTempWrapper>
					<p>{weatherData?.weather[0].description}</p>
				</TempWrapper>
				<WeatherDetails
					feels_like={weatherData.main.feels_like}
					temp_max={weatherData.main.temp_max}
					temp_min={weatherData.main.temp_min}
					humidity={weatherData.main.humidity}
					pressure={weatherData.main.pressure}
				/>
			</Wrapper>
		</WeatherDisplayWrapper>
	);
};

export default WeatherDisplay;
