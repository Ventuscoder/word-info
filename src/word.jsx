import './word.css';
import Meaning from "./meaning";
import { ThemeContext } from './App';
import { useContext } from 'react';

const Word = (props) => {
    const {theme} = useContext(ThemeContext);

    const {wordDescription} = props;
    const audioElement = new Audio(wordDescription.phonetic);

    const playAudio = () => {
        audioElement.play();
    }

    return (
        <div className='word d-flex justify-content-center flex-column'>
            <div className='w mb-1'>{wordDescription.word}</div>
            {wordDescription.phonetic != '' ? 
                <button onClick={playAudio} className={!theme ? 'p-2 audio-btn light' : 'p-2 audio-btn dark'}><i class="fa-solid fa-ear-listen"></i> Pronounce this word</button> : null
            }
            <div className='meanings'>
                {
                    wordDescription.meanings.map((meaning, index)=>(
                        <Meaning id={index} data={meaning} />
                    ))
                }
            </div>
        </div>
    )
}

export default Word;