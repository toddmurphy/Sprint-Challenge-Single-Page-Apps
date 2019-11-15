import React, { useState, useEffect } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3%;
`
const SearchInput = styled.input`
  font-size: 2rem;
  width: 100%;
  padding: 3% 0;
  border-radius: 5px;
`

const DataTitles = styled.div`
  display: flex;
  margin-top: 3%;
  font-size: 1.6rem;
`

const DataLabel = styled.p`
  border-radius: 5px;
  margin: 0 5%;
`

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterData, setCharacters] = useState([]);
  const [query, setQuery] = useState(''); //Add second slice of state for 'search' --> set as empty string '' because the text input in empty and we type characters that filters the search

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response.data.results)
        //Need to update the respone to accept to filter search
        const charactersArray = response.data.results;
        const result = charactersArray.filter(character => character.name.toLowerCase().includes(query.toLowerCase()))
        setCharacters(result);
      })
      .catch(error => {
        console.log('No character data returned', error)
      })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    //Remember to add 'query' to dependency array because this is what we're watching for a change each time
  }, [query]);

  //Add 'handleChange' to watch for the change in event.target.value
  //Add 'setQuery' to set the state to watch for the 'query'
  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  return (
    <section className="character-list">
      <SearchBox>
        <form>
          <SearchInput
            id='name'
            type='text'
            placeholder='Search by name'
            // Add 'onChange' to watch the 'query' changing that updates the input
            onChange={handleChange}
            // Add 'value' that accepts the 'query' string name we're looking to search for
            value={query}
          />
        </form>
      </SearchBox>
      <DataTitles>
        <DataLabel>Name</DataLabel>
        <DataLabel>Gender</DataLabel>
        <DataLabel>Species</DataLabel>
        <DataLabel>Status</DataLabel>
        <DataLabel>Location</DataLabel>
      </DataTitles>
      <div>
        {characterData.map(character => (
          // console.log(character)
          < CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </section>
  );
}
