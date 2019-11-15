import React, { useState, useEffect } from "react";
import axios from 'axios';
import CharacterCard from './LocationCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterData, setCharacters] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response.data.results)
        const charactersArray = response.data.results;
        setCharacters(charactersArray);
      })
      .catch(error => {
        console.log('No character data returned', error)
      })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <div>
        {characterData.map((characters, index) => {
          return <CharacterCard key={index} characters={characters} />;
        })}
      </div>
    </section>
  );
}
