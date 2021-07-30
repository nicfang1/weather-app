import React from "react";
import styled from "styled-components";

interface Props {
	temp: number | undefined;
	title: string;
}

const Title = styled.h3`
	font-weight: 300;
	font-size: 0.6rem;
	margin: 0;
	padding: 0;
`;

const Temp = styled.h3`
	margin: 0;
	padding: 0;
`;

const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 2rem 1rem 0rem;
`;

const WeatherCard: React.FC<Props> = (props) => {
	return (
		<CardWrapper>
			<Temp>{`${props.temp}°C`}</Temp>
			<Title>{props.title}</Title>
		</CardWrapper>
	);
};

export default WeatherCard;
