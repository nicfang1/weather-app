import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/store";
import ForcastedWeatherCard from "./ForcastedWeatherCard";

const ForcastedWeatherWrapper = styled.div`
	margin-top: 1rem;
	background-color: white;
	padding: 1rem 1.5rem;
	border-radius: 2em;
`;

const Wrapper = styled.div`
	display: flex;
	overflow: scroll;
	gap: 1.5rem;
`;

const ForcastedWeatherDisplay: React.FC = () => {
	const forcastedWeatherData = useSelector(
		(state: RootState) => state.forecastedWeather
	);

	if (forcastedWeatherData.length === 0) {
		return <div></div>;
	}

	return (
		<ForcastedWeatherWrapper>
			<h3>Forecasted Weather</h3>
			<Wrapper>
				{forcastedWeatherData.map((forcastedDate) => (
					<ForcastedWeatherCard
						forcastedDate={forcastedDate}
						key={forcastedDate.id}
					/>
				))}
			</Wrapper>
		</ForcastedWeatherWrapper>
	);
};

export default ForcastedWeatherDisplay;
