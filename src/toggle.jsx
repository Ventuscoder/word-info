import './toggle.css';
import { ThemeContext } from './App';
import { useContext } from 'react';

const Toggle = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <div className='toggle p-2'>
            <button onClick={()=>setTheme(!theme)} className={!theme ? 'toggle-button rounded light' : 'toggle-button rounded dark'}>Toggle theme</button>
        </div>
    )
}

export default Toggle;