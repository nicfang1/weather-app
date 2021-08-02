import React from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/weather/WeatherDisplay";
import ForcastedWeatherDisplay from "./components/weather/ForcastedWeatherDisplay";
import { Container, Heading } from "@chakra-ui/react";

const App: React.FC = () => {
	return (
		<Container>
			<Heading marginBottom=".4em">React Weather App</Heading>
			<SearchBar />
			<WeatherDisplay />
			<ForcastedWeatherDisplay />
		</Container>
	);
};

export default App;
