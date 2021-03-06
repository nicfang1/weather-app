import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { TransformedForcastedData } from "../../interfaces/weather-interface";
import { RootState } from "../../store/store";
import { tempConverter } from "../../utils/temp-converter";

interface Props {
	forcastedDate: TransformedForcastedData;
}

const ForcastedWeatherCard: React.FC<Props> = ({ forcastedDate }) => {
	const changeTemp = useSelector((state: RootState) => state.toCelcius.celcius);

	return (
		<Flex flexDirection="column" align="center" w="min-content">
			<Text>{forcastedDate.date}</Text>
			<Text>{forcastedDate.time}</Text>
			<img src={forcastedDate.icon} alt={forcastedDate.description} />
			<Text>
				{tempConverter(forcastedDate.temp, changeTemp)}
				{changeTemp ? "°" : "K"}
			</Text>
			<Text>{forcastedDate.description}</Text>
		</Flex>
	);
};

export default ForcastedWeatherCard;
