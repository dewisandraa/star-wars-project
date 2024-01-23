import { useState } from 'react'
import StarWarsCharacters from './components/StarWarsCharacters'
import Background from "./components/Background";
import './App.css'

function App() {

  return (
    <>
      <Background/>
        <div className="container font-family">
          <StarWarsCharacters/>
        </div>
    </>
  )
}

export default App
