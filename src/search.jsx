import { useState } from 'react';
import './search.css';

const Search = (props) => {
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
                <input type="text" className='search-input rounded' name="search" id="search" value={search} onChange={handleChange} placeholder='Type in a word...' />
                <button type="submit" className='search-button rounded' disabled={search.trim()===''}><i class="fa-solid fa-magnifying-glass"></i> Search this word</button>
            </form>
        </div>
    )
}

export default Search;