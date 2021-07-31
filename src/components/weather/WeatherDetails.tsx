import React from "react";
import styled from "styled-components";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { tempConverter } from "../../utils/temp-converter";

interface Props {
	feels_like: number;
	temp_max: number;
	temp_min: number;
	humidity: number;
	pressure: number;
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const WeatherDetails: React.FC<Props> = (props) => {
	const changeTemp = useSelector((state: RootState) => state.toCelcius.celcius);

	const feelsLike = `${tempConverter(props.feels_like, changeTemp)}${
		changeTemp ? "°" : "K"
	}`;
	const tempMax = `${tempConverter(props.temp_max, changeTemp)}${
		changeTemp ? "°" : "K"
	}`;
	const tempMin = `${tempConverter(props.temp_min, changeTemp)}${
		changeTemp ? "°" : "K"
	}`;

	return (
		<div>
			<h3>Feels like {feelsLike}</h3>
			<Wrapper>
				<Wrapper>
					<AiOutlineArrowUp />
					<h3>{tempMax}</h3>
				</Wrapper>
				<Wrapper>
					<AiOutlineArrowDown />
					<h3>{tempMin}</h3>
				</Wrapper>
			</Wrapper>
			<p>Humidity {props.humidity}%</p>
			<p>Pressure {props.pressure}kPa</p>
		</div>
	);
};

export default WeatherDetails;
