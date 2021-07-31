import React from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/weather/WeatherDisplay";
import ForcastedWeatherDisplay from "./components/weather/ForcastedWeatherDisplay";
import { Container, Text } from "@chakra-ui/react";

const App: React.FC = () => {
	return (
		<Container>
			<Text fontSize="2xl" fontWeight="700" marginBottom="1rem">
				React Weather App
			</Text>
			<SearchBar />
			<WeatherDisplay />
			<ForcastedWeatherDisplay />
		</Container>
	);
};

export default App;
