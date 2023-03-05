import { useState } from 'react'
import Search from "./search";
import './App.css'

function App() {

  const handleSearchSubmit = (e, searchValue) => {
    // Prevent default form submit behaviour
    e.preventDefault();
    console.log(searchValue);
  }

  return (
    <div className="container-fluid">
      <Search handleSubmit={handleSearchSubmit} />
    </div>
  )
}

export default App
