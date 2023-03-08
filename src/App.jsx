import { createContext, useState } from 'react'
import Search from "./search";
import Word from './word';
import Toggle from './toggle';
import './App.css'

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(false);

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('Loading...')

  const [currentWord, setCurrentWord] = useState({word: '', phonetic: '', meanings: []});

  const handleSearchSubmit = (e, searchValue) => {
    // Prevent default form submit behaviour
    e.preventDefault();
    setLoading(true)

    async function getWordData() {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`
      );
      const data = await res.json();
      console.log(data);
      if (data) {
        if (data.message) {
          setMsg(data.message);
          return
        } else {
          setLoading(false);
        }
      }
      
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
      <div className={!theme ? 'app container-fluid light' : 'app container-fluid dark'}>
        <Search handleSubmit={handleSearchSubmit} />
        {loading && <div className="loading p-2">{msg}</div>}
        {!loading &&
          currentWord.word != '' ? <Word wordDescription={currentWord} /> : null
        }
        <Toggle />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
