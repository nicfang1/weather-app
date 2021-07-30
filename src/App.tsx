import React from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/weather/WeatherDisplay";
import styled from "styled-components";

export const Wrapper = styled.div<{ padding: string }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: ${(props) => props.padding};
	background-color: rgba(255, 255, 255, 0.2);
	border-radius: 3em;
	backdrop-filter: blur(40px);
	border: solid 2px transparent;
	background-clip: padding-box;
	box-shadow: 10px 10px 10px rgba(46, 54, 68, 0.03);
	width: 80%;
	margin: auto;
`;

const App: React.FC = () => {
	return (
		<Wrapper padding="4em">
			<SearchBar />
			<WeatherDisplay />
		</Wrapper>
	);
};

export default App;
