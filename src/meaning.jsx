import './meaning.css';

const Meaning = (props) => {
    const {id, data} = props;
    const makeStr = (arr) => {
        let newStr = '';
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
        <div className='meaning rounded' key={id}>
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
                    makeStr(data.synonyms)
                }
            </div>
            <div className='antonyms'>
                {
                    makeStr(data.antonyms)
                }
            </div>
        </div>
    )
}

export default Meaning;