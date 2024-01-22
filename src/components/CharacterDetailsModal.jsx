import React from 'react';
import { Modal, Box, Typography, CircularProgress } from '@mui/material';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

const CharacterDetailsModal = ({ character, homeworld, open, handleClose, loading }) => {
  if (!character) return null;

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'rgba(0, 0, 0, 0.8)',
    boxShadow: 20,
    p: 4,
    borderRadius: 2,
  };

  // Display a loading indicator if the data is still loading
  if (loading) {
    return (
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <CircularProgress />
        </Box>
      </Modal>
    );
  }

  // Render modal content once loading is complete
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
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
      </Box>
    </Modal>
  );
};

export default CharacterDetailsModal;
