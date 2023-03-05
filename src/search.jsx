import { useState } from 'react';
import './search.css';

const Search = (props) => {
    const {handleSubmit} = props;
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className='search'>
            <form className='form' onSubmit={(e)=>handleSubmit(e, search)}>
                <input type="text" className='search-input' name="search" id="search" value={search} onChange={handleChange} placeholder='Type in a word...' />
                <button type="submit" className='search-button' disabled={search.trim()===''}>Enter</button>
            </form>
        </div>
    )
}

export default Search;