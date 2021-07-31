import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { convertToCelcius } from "../../store/tempUnitSlice";
import WeatherDetails from "./WeatherDetails";
import { iconPath } from "../../utils/icon-path";
import { tempConverter } from "../../utils/temp-converter";
import {
	Switch,
	Container,
	Flex,
	SimpleGrid,
	Box,
	Text,
} from "@chakra-ui/react";

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
		<Container marginTop="1rem" border="2px" borderRadius="1em" padding="1rem">
			<Flex justify="space-between">
				<Text fontSize="lg" fontWeight={700}>
					Current Weather
				</Text>
				<div>
					<Switch onChange={() => dispath(convertToCelcius())} id="tempUnit" />
				</div>
			</Flex>
			<SimpleGrid columns={2} columnGap="2rem">
				<Box>
					<h2>{weatherData?.name}</h2>
					<Flex align="center">
						<img
							src={iconPath(weatherData.weather[0].icon)}
							alt={weatherData?.name}
						/>
						<Box>
							<h3>{temp}</h3>
							<p>{weatherData?.weather[0].description}</p>
						</Box>
					</Flex>
				</Box>
				<WeatherDetails
					feels_like={weatherData.main.feels_like}
					temp_max={weatherData.main.temp_max}
					temp_min={weatherData.main.temp_min}
					humidity={weatherData.main.humidity}
					pressure={weatherData.main.pressure}
				/>
			</SimpleGrid>
		</Container>
	);
};

export default WeatherDisplay;
