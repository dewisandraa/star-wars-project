import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Box, Typography, CircularProgress } from '@mui/material'

const formatDate = dateString => {
  const date = new Date(dateString)
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
}

const CharacterDetailsModal = ({
  character,
  homeworld,
  open,
  handleClose,
  loading,
}) => {
  if (!character) return null

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
    textAlign: 'center',
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <Typography variant="h4" sx={{ pb: 3 }}>
              {character.name}
            </Typography>
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
  )
}

CharacterDetailsModal.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    height: PropTypes.string,
    mass: PropTypes.string,
    created: PropTypes.string,
    films: PropTypes.arrayOf(PropTypes.string),
    birth_year: PropTypes.string,
  }),
  homeworld: PropTypes.shape({
    name: PropTypes.string,
    terrain: PropTypes.string,
    climate: PropTypes.string,
    population: PropTypes.string,
  }),
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}


export default CharacterDetailsModal