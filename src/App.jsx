import { useState } from 'react'
import Search from "./search";
import Word from './word';
import Toggle from './toggle';
import './App.css'

function App() {

  const [currentWord, setCurrentWord] = useState({word: '', phonetic: '', meanings: []});

  const handleSearchSubmit = (e, searchValue) => {
    // Prevent default form submit behaviour
    e.preventDefault();
    console.log(searchValue);

    async function getWordData() {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`
      );
      const data = await res.json();
      console.log(data);
      setCurrentWord({
        word: data[0].word,
        phonetic: data[0].phonetics[0].audio,
        meanings: data[0].meanings
      });
    }
    getWordData();
  }

  return (
    <div className="container-fluid">
      <Search handleSubmit={handleSearchSubmit} />
      {
        currentWord.word != '' ? <Word wordDescription={currentWord} /> : null
      }
      <Toggle />
    </div>
  )
}

export default App
