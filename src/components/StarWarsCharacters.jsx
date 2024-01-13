import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';

const StarWarsCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [randomPhotoUrls, setRandomPhotoUrls] = useState([]);
  const [species, setSpecies] = useState([]);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get('https://swapi.dev/api/people/');
      console.log(response.data.results)
      const fetchedCharacters = response.data.results; 
      setCharacters(fetchedCharacters);
      const urls = fetchedCharacters.map(() => `https://picsum.photos/300/300?random=${Math.random()}`);
      setRandomPhotoUrls(urls);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div style={{ display: 'flex',flexWrap: 'wrap', justifyContent: 'center' }}>
      {characters.map((character, index) => (
        <Card
          key={character.name}
          style={{ margin: '28px'}}
          // Add onClick to show character details modal
        >
          <img src={randomPhotoUrls[index]} alt={character.name} />
        </Card>
      ))}
    </div>
  );
};

export default StarWarsCharacters;