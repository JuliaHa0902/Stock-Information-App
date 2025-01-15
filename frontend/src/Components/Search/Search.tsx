import React, { ChangeEvent, useState, SyntheticEvent } from 'react'

interface Props {
    onSearchSubmit: (e: SyntheticEvent) => void;
    search: string | undefined;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search : React.FC<Props> = ({onSearchSubmit, search, handleSearchChange} : Props): JSX.Element => {
    return (
        <form onSubmit={onSearchSubmit}>
            <input 
                className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none"
                value={search} 
                onChange={handleSearchChange}
            >
            </input>
        </form>
    )
}

export default Search