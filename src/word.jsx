import './word.css';

const Word = (props) => {
    const {wordDescription} = props;
    const audioElement = new Audio(wordDescription.phonetic);

    const playAudio = () => {
        audioElement.play();
    }

    return (
        <div className='word d-flex justify-content-center flex-column'>
            <div className='p-2 w'>{wordDescription.word}</div>
            {wordDescription.phonetic != '' ? 
                <button onClick={playAudio} className='audio-btn'><i class="fa-solid fa-ear-listen"></i> Pronounce this word</button> : null
            }
        </div>
    )
}

export default Word;