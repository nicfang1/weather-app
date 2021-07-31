import React from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/weather/WeatherDisplay";
import styled from "styled-components";
import { getWeatherForecast } from "./api/current-weather";

const Wrapper = styled.div`
	width: 80%;
	margin: 0 auto;
`;

const App: React.FC = () => {
	getWeatherForecast("singapore");

	return (
		<Wrapper>
			<h2>React Weather App</h2>
			<SearchBar />
			<WeatherDisplay />
		</Wrapper>
	);
};

export default App;
