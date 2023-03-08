import { useContext, useState } from 'react';
import { ThemeContext } from './App';
import './search.css';

const Search = (props) => {
    const {theme} = useContext(ThemeContext);

    // handleSubmit function to pass data from child to parent
    const {handleSubmit} = props;

    const [search, setSearch] = useState('');

    // Function to handle change in input box - updating the state
    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className='search d-flex justify-content-center'>
            <form className='form' onSubmit={(e)=>handleSubmit(e, search)}>
                <input type="text" className={!theme ? 'search-input rounded light' : 'search-input rounded dark'} name="search" id="search" value={search} onChange={handleChange} placeholder='Type in a word...' />
                <button type="submit" className={!theme ? 'search-button rounded light' : 'search-button rounded dark'} disabled={search.trim()===''}><i className="fa-solid fa-magnifying-glass"></i> Search this word</button>
            </form>
        </div>
    )
}

export default Search;