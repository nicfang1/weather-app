import { Container, Flex, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ForcastedWeatherCard from "./ForcastedWeatherCard";

const ForcastedWeatherDisplay: React.FC = () => {
	const forcastedWeatherData = useSelector(
		(state: RootState) => state.forecastedWeather
	);

	if (forcastedWeatherData.length === 0) {
		return <div></div>;
	}

	return (
		<Container marginTop="1rem" border="2px" borderRadius="1em" padding="1rem">
			<Text fontSize="lg" fontWeight={700} marginBottom="0.5rem">
				Forecasted Weather
			</Text>
			<Flex spacing={10} overflow="scroll">
				{forcastedWeatherData.map((forcastedDate) => (
					<ForcastedWeatherCard
						forcastedDate={forcastedDate}
						key={forcastedDate.id}
					/>
				))}
			</Flex>
		</Container>
	);
};

export default ForcastedWeatherDisplay;
