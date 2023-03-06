import './word.css';

const Word = (props) => {
    const {wordDescription} = props;
    const audioElement = new Audio(wordDescription.phonetic);

    const playAudio = () => {
        audioElement.play();
    }

    return (
        <div className='d-flex justify-content-center'>
            {wordDescription.phonetic != '' ? 
                <button onClick={playAudio} className='audio-btn rounded'><i class="fa-solid fa-ear-listen"></i> Pronounce this word</button> : null
            }
        </div>
    )
}

export default Word;