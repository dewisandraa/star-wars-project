import React from 'react';
import { Modal, Box, Typography, CircularProgress } from '@mui/material';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

const CharacterDetailsModal = ({ character, homeworld, open, handleClose, loading }) => {
  console.log('Loading:', loading);

  if (!character) return null;

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 325,
    bgcolor: 'rgba(0, 0, 0, 0.8)',
    boxShadow: 20,
    p: 4,
    borderRadius: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center',
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        {loading ? (
            <CircularProgress />
        ) : (
          <>
            <Typography variant="h4">{character.name}</Typography>
            <Typography>Height: {character.height}m</Typography>
            <Typography>Mass: {character.mass}kg</Typography>
            <Typography>Date Added: {formatDate(character.created)}</Typography>
            <Typography>Films: {character.films.length}</Typography>
            <Typography>Birth Year: {character.birth_year}</Typography>
            {homeworld && (
              <>
                <Typography>Homeworld: {homeworld.name}</Typography>
                <Typography>Terrain: {homeworld.terrain}</Typography>
                <Typography>Climate: {homeworld.climate}</Typography>
                <Typography>Population: {homeworld.population}</Typography>
              </>
            )}
          </>
        )}
      </Box>
    </Modal>
  );
};

export default CharacterDetailsModal;