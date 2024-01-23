import React, { useState } from "react";
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
  randomPhotoUrl,
  openModal,
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

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
                    <img
                        src={randomPhotoUrl}
                        alt={character.name}
                        style={{
                        borderRadius: "5px",
                        display: imageLoaded ? "block" : "none",
                        }}
                        onLoad={() => setImageLoaded(true)}
                    />
                    {!imageLoaded && (
                    <Skeleton
                        variant="rectangular"
                        width={300}
                        height={300}
                        style={{ borderRadius: "5px" }}
                        />
                    )}
                </CardContent>
            </CardActionArea>
        </Card>
    );
    };

CharacterCard.propTypes = {
    character: PropTypes.shape({
        name: PropTypes.string.isRequired,
        species: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    randomPhotoUrl: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
    };
      
export default CharacterCard;
