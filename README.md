# Star Wars Characters App

The Star Wars Characters App is a React + Vite application that allows users to explore and search for information about Star Wars characters. The app fetches data from the [Star Wars API (SWAPI)](https://swapi.dev/) and displays character details along with their homeworld information.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Components](#components)
- [Usage](#usage)

## Installation

```bash
# Clone the repository
git clone https://github.com/dewisandraa/star-wars-project.git

# Navigate to the project folder
cd star-wars-project

# Install dependencies
npm install
```

# Features

- **Fetches Star Wars characters data from SWAPI:**
  The app retrieves character information from the Star Wars API (SWAPI) to provide up-to-date details.

- **Allows users to search for characters by name:**
  Users can easily search for specific characters by entering their names in the search bar.

- **Displays character details, including homeworld information:**
  Each character card shows comprehensive details about the selected character, including homeworld information.

- **Responsive design for a seamless user experience:**
  The app is designed to provide a smooth and responsive user experience across various devices.

# Components

- **StarWarsCharacters.jsx:**
  The main component responsible for fetching and displaying Star Wars characters. It serves as the core component of the application.

- **CharacterCard.jsx:**
  A reusable component designed for displaying individual character information in a visually appealing card format.

- **CharacterDetailsModal.jsx:**
  A modal component that presents detailed information about a selected character, including homeworld details.

- **Background.jsx:**
  (Assuming it's related to styling) A component responsible for styling or background elements in the application.

- **StarWarsCharacters.css:**
  The stylesheet specifically crafted for styling the StarWarsCharacters component, ensuring a cohesive and visually appealing UI.

# Usage

1. Run the development server:

```bash
npm run dev
```

2. Open your browser and navigate to http://localhost:3000.

3. Explore Star Wars characters, search for specific characters, and view detailed information.
