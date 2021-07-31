import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { fetchWeatherData } from "../store/weatherSlice";
import { fetchForcastedData } from "../store/forcastedWeatherSlice";

const Input = styled.input`
	background-color: transparent;
	border: 2px solid transparent;
	border-radius: 2em;
	width: 100%;
	outline: none;
`;

const SearchWrapper = styled.div`
	width: 100%;
	background-color: rgb(255, 255, 255);
	display: flex;
	align-items: center;
	padding: 0.5rem 1rem;
	border-radius: 3em;
`;

const Form = styled.form`
	width: 100%;
`;

const SearchBar: React.FC = () => {
	const [citySearch, setCitySearch] = useState<string>("");
	const dispatch = useDispatch();
	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(fetchWeatherData(citySearch));
		dispatch(fetchForcastedData(citySearch));
		setCitySearch("");
	};

	return (
		<SearchWrapper>
			<AiOutlineSearch />
			<Form onSubmit={submitHandler}>
				<Input
					type="text"
					id="searchBar"
					value={citySearch}
					onChange={(event) => setCitySearch(event.target.value)}
					autoComplete="off"
					placeholder="Search for a City!"
				/>
			</Form>
		</SearchWrapper>
	);
};

export default SearchBar;
