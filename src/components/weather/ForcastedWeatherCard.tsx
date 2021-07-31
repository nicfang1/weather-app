import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { TransformedForcastedData } from "../../interfaces/weather-interface";
import { RootState } from "../../store/store";
import { tempConverter } from "../../utils/temp-converter";

interface Props {
	forcastedDate: TransformedForcastedData;
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 10rem;

	h4,
	h5 {
		margin: 0;
		padding: 0;
	}
`;

const ForcastedWeatherCard: React.FC<Props> = ({ forcastedDate }) => {
	const changeTemp = useSelector((state: RootState) => state.toCelcius.celcius);

	return (
		<Wrapper>
			<h4>{forcastedDate.date}</h4>
			<h5>{forcastedDate.time}</h5>
			<img src={forcastedDate.icon} alt={forcastedDate.description} />
			<p>
				{tempConverter(forcastedDate.temp, changeTemp)}
				{changeTemp ? "°" : "K"}
			</p>
			<p>{forcastedDate.description}</p>
		</Wrapper>
	);
};

export default ForcastedWeatherCard;
