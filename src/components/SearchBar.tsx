import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeatherData } from "../store/currentWeatherSlice";
import { fetchForcastedData } from "../store/forcastedWeatherSlice";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

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
		<form onSubmit={submitHandler}>
			<InputGroup>
				<InputLeftElement
					pointerEvents="none"
					children={<SearchIcon color="gray.300" />}
				/>
				<Input
					type="text"
					id="searchBar"
					value={citySearch}
					onChange={(event) => setCitySearch(event.target.value)}
					autoComplete="off"
					placeholder="Search for a City!"
				/>
			</InputGroup>
		</form>
	);
};

export default SearchBar;
