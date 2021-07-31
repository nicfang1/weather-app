import React from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/weather/WeatherDisplay";
import styled from "styled-components";
import ForcastedWeatherDisplay from "./components/weather/ForcastedWeatherDisplay";

const Wrapper = styled.div`
	width: 80%;
	margin: 0 auto;
`;

const App: React.FC = () => {
	return (
		<Wrapper>
			<h2>React Weather App</h2>
			<SearchBar />
			<WeatherDisplay />
			<ForcastedWeatherDisplay />
		</Wrapper>
	);
};

export default App;
