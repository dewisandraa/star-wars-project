import { useState } from 'react'
import StarWarsCharacters from './components/StarWarsCharacters'
import Background from "./components/Background";
import './App.css'

function App() {

  return (
    <>
      <Background/>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Hello World 
        </p> */}
        <div className="container font-family">
          <StarWarsCharacters/>
        </div>
      {/* </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App