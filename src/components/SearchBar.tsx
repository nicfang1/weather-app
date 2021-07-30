import React from 'react'

interface Props {
    setSearch: (text: string) => void
}

const SearchBar: React.FC<Props> = (props) => {

    return (
        <div>
            <form>
                <label htmlFor="searchBar">Search for a City!</label>
                <input type="text" id="searchBar" onChange={event => props.setSearch(event?.target.value)}/>
            </form>
        </div>
    )
}

export default SearchBar
