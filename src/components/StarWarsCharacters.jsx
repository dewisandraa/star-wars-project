import React, { useState, useEffect } from 'react'
import { CircularProgress, TextField } from '@mui/material'
import './StarWarsCharacters.css'
import axios from 'axios'
import CharacterCard from './CharacterCard'
import CharacterDetailsModal from './CharacterDetailsModal'

const SWAPI_PEOPLE_API = 'https://swapi.dev/api/people/'

const StarWarsCharacters = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  // const [imagesLoading, setImagesLoading] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const [homeworld, setHomeworld] = useState(null)
  const [homeworldLoading, setHomeworldLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const fetchCharacters = async () => {
    setLoading(true)
    try {
      const response = await axios.get(SWAPI_PEOPLE_API)
      const fetchedCharacters = response.data.results
      const filteredCharacters = fetchedCharacters.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setCharacters(filteredCharacters)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  const openModal = async character => {
    setSelectedCharacter(character)
    setIsModalOpen(true)
    setHomeworldLoading(true)

    try {
      const homeworldResponse = await axios.get(character.homeworld)
      setHomeworld(homeworldResponse.data)
    } catch (error) {
      console.error('Error fetching homeworld data:', error)
    } finally {
      setHomeworldLoading(false)
      setIsModalOpen(true)
    }
  }

  const closeModal = () => {
    setSelectedCharacter(null)
    setIsModalOpen(false)
  }

  const handleSearch = event => {
    const searchTerm = event.target.value.toLowerCase()
    setSearchTerm(searchTerm)
  }

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress size={50} />
      </div>
    )
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <TextField
        label="Search character"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearch}
        sx={{ marginY: '20px', width: '300px' }}
      />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        {characters.map(
          (character, index) =>
            (character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              !searchTerm) && (
              <CharacterCard
                key={character.name}
                character={character}
                index={index}
                randomPhotoUrl={`https://picsum.photos/id/${10 + index}/300/300`}
                openModal={openModal}
              />
            ),
        )}
      </div>
      <CharacterDetailsModal
        character={selectedCharacter}
        homeworld={homeworld}
        open={isModalOpen}
        handleClose={closeModal}
        loading={homeworldLoading}
      />
    </div>
  )
}

export default StarWarsCharacters
