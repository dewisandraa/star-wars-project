import React from "react";
import {
  Card,
  CardContent,
  Skeleton,
  Typography,
  CardActionArea,
} from "@mui/material";
import { red, teal } from "@mui/material/colors";

const CharacterCard = ({
  character,
  index,
  randomPhotoUrl,
  imagesLoading,
  openModal,
}) => {
  const getCardColor = (species) => {
    const speciesColors = {
      "https://swapi.dev/api/species/2/": red[700],
    };

    return speciesColors[species] || teal[500];
  };

  return (
    <Card
      key={character.name}
      className="character-card"
      style={{
        margin: "28px",
        backgroundColor: getCardColor(character.species[0]),
        borderRadius: "5px",
        width: "330px",
        height: "370px",
      }}
      sx={{
        "&:hover": {
          transform: "scale(1.05)",
          transition: "transform 0.3s ease-in-out",
        },
      }}
    >
      <CardActionArea onClick={() => openModal(character)}>
        <CardContent>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Orbitron", color: "white", b: 4 }}
          >
            {character.name}
          </Typography>
          {imagesLoading[index] ? (
            <Skeleton variant="rectangular" width={300} height={300} />
          ) : (
            <img
              src={randomPhotoUrl}
              alt={character.name}
              style={{ borderRadius: "5px" }}
            />
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CharacterCard;
