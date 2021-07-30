import React from "react";
import styled from "styled-components";

interface Props {
	setSearch: (text: string) => void;
}

const Input = styled.input`
	background-color: rgba(255, 255, 255, 0.4);
	border: 2px solid transparent;
	border-radius: 2em;
`;

const SearchWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	margin-bottom: 1rem;
`;

const SearchBar: React.FC<Props> = (props) => {
	return (
		<SearchWrapper>
			<label htmlFor="searchBar">Search for a City!</label>
			<Input
				type="text"
				id="searchBar"
				onChange={(event) => props.setSearch(event?.target.value)}
				autoComplete="off"
			/>
		</SearchWrapper>
	);
};

export default SearchBar;
