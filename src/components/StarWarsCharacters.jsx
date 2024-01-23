import React, { useState, useEffect } from 'react';
import { Card, CardContent, Skeleton, Typography, CircularProgress, CardActionArea } from '@mui/material';
import { blue, blueGrey } from '@mui/material/colors';
import './StarWarsCharacters.css';
import axios from 'axios';
import CharacterDetailsModal from './CharacterDetailsModal';

const SWAPI_PEOPLE_API = 'https://swapi.dev/api/people/';

const StarWarsCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [randomPhotoUrls, setRandomPhotoUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imagesLoading, setImagesLoading] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [homeworld, setHomeworld] = useState(null);
  const [homeworldLoading, setHomeworldLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const fetchCharacters = async () => {
    setLoading(true);
    try {
      const response = await axios.get(SWAPI_PEOPLE_API);
      const fetchedCharacters = response.data.results;
      setCharacters(fetchedCharacters);
      const urls = fetchedCharacters.map(() => `https://picsum.photos/300/300?random=${Math.random()}`);
      setRandomPhotoUrls(urls);
    } catch (error) {
      console.error('Error fetching data:', error);
    }  finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);


  useEffect(() => {
    if (characters.length) {
      setImagesLoading(new Array(characters.length).fill(true));

      const imagePromises = randomPhotoUrls.map((url, index) => new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          resolve(url);
          setImagesLoading(prev => {
            const updated = [...prev];
            updated[index] = false;
            return updated;
          });
        };
      }));

      Promise.all(imagePromises)
        .then(() => setLoading(false))
        .catch((error) => console.error('Error loading images:', error));
    }
  }, [randomPhotoUrls, characters.length]);

  const getCardColor = (species) => {
    const speciesColors = {
      'https://swapi.dev/api/species/2/': blue[900],
    };

    return speciesColors[species] || blueGrey[900];
  };

  const openModal = async (character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
    setHomeworldLoading(true); 

    try {
      const homeworldResponse = await axios.get(character.homeworld);
      setHomeworld(homeworldResponse.data);
    } catch (error) {
      console.error('Error fetching homeworld data:', error);
    } finally {
      setHomeworldLoading(false);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setSelectedCharacter(null);
    setIsModalOpen(false);
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress size={50} />
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      {characters.map((character, index) => (
        <Card
          key={character.name}
          className="character-card"
          style={{
            margin: '28px',
            backgroundColor: getCardColor(character.species[0]),
            borderRadius: '5px',
            width: '330px',
            height: '370px',
          }}
          sx={{
            '&:hover': {
              transform: 'scale(1.05)',
              transition: 'transform 0.3s ease-in-out',
            },
          }}
        >
          <CardActionArea onClick={() => openModal(character)}>
            <CardContent>
              <Typography variant="h5" sx={{ fontFamily: 'Orbitron', color: 'white', b:4}}>
                {character.name}
              </Typography>
              {imagesLoading[index] ? (
                 <Skeleton variant="rectangular" width={300} height={300} /> //
              ) : (
                <img src={randomPhotoUrls[index]} alt={character.name} style={{ borderRadius: '5px' }} />
              )}
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
        <CharacterDetailsModal
        character={selectedCharacter}
        homeworld={homeworld}
        open={isModalOpen}
        handleClose={closeModal}
        loading={homeworldLoading}
      />
    </div>
  );
};

export default StarWarsCharacters;
