import './meaning.css';
import { ThemeContext } from './App';
import { useContext } from 'react';

const Meaning = (props) => {
    const {theme} = useContext(ThemeContext);

    const {id, data} = props;
    const makeStr = (arr, arg) => {
        let newStr = '';
        if (arg == 'syn') {
            newStr += 'Synonyms - '
        } else {
            newStr += 'Antonyms - '
        }
        if (arr.length == 0) {return}
        if (arr.length == 1) {return arr[0]}
        for (let i = 0; i < arr.length; i++) {
            let word = arr[i];
            newStr+=arr[i];
            if (arr.length-1 != i) {
                newStr+=', '
            }
        }
        return newStr;
    }

    return (
        <div className={!theme ? 'meaning rounded p-1 mb-3 light' : 'meaning rounded p-1 mb-3 dark'} key={id}>
            <div className='part-speech'>as a {data.partOfSpeech}</div>
            <div className='definitions'>
                <ol>
                    {
                        data.definitions.map((def, index)=>(
                            <p key={index+100}>{def.definition}</p>
                        ))
                    }
                </ol>
            </div>
            <div className='synonyms'>
                {
                    makeStr(data.synonyms, 'syn')
                }
            </div>
            <div className='antonyms'>
                {
                    makeStr(data.antonyms, 'ant')
                }
            </div>
        </div>
    )
}

export default Meaning;