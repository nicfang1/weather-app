import React from "react";
import styled from "styled-components";
import { TransformedForcastedData } from "../../interfaces/weather";

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
	return (
		<Wrapper>
			<h4>{forcastedDate.date}</h4>
			<h5>{forcastedDate.time}</h5>
			<img src={forcastedDate.icon} alt={forcastedDate.description} />
			<p>{forcastedDate.temp}°</p>
			<p>{forcastedDate.description}</p>
		</Wrapper>
	);
};

export default ForcastedWeatherCard;
