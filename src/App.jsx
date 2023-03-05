import { useState } from 'react'
import Search from "./search";
import './App.css'

function App() {

  const handleSearchSubmit = (e, searchValue) => {
    // Prevent default form submit behaviour
    e.preventDefault();
    console.log(searchValue);

    async function getWordData() {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`
      );
      const data = await res.json();
      console.log(data)
    }
    getWordData();
  }

  return (
    <div className="container-fluid">
      <Search handleSubmit={handleSearchSubmit} />
    </div>
  )
}

export default App
