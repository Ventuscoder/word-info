import { createContext, useState } from 'react'
import Search from "./search";
import Word from './word';
import Toggle from './toggle';
import './App.css'

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(false);

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
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={!theme ? 'container-fluid light' : 'container-fluid dark'}>
        <Search handleSubmit={handleSearchSubmit} />
        {
          currentWord.word != '' ? <Word wordDescription={currentWord} /> : null
        }
        <Toggle />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
