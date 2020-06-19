import React, {useEffect, useState} from 'react';
import NavBar from '../NavBar/NavBar';
import SentenceCard from '../commons/SentenceCard';

const dummyData = [
    {
        id: 1,
        eng: 'hello, my name is Alice',
        kor: '안녕',
    },
    {
        id: 2,
        eng: 'bye, I am going home!!!',
        kor: '안녕',
    },
    {
        id: 3,
        eng: 'apple, yum yum',
        kor: '사과',
    },
    {
        id: 4,
        eng: 'mangooooooo',
        kor: '망고',
    }
]

function MySentencePage() {

    const [MySentences, setMySentences] = useState([])

    useEffect(() => {
        
        setMySentences(dummyData)

    }, [])


    return (
        <>
        <NavBar mySentence />
        <div style={{
            // border:'1px solid red',
            width: '85%', 
            margin: '5rem auto'
        }}>

            {/* Title */}
            <div style={{display: 'flex', alignItems: 'center'}}>
                <strong style={{display:'inline', fontSize: '1.5rem'}}>| My Sentences |</strong>
            </div>


            <hr />


            {/* Body */}
            <div style={{
                        // border: '1px solid red',
                        borderRadius:'5px', 
                        backgroundColor:'#e6e6e6', 
                        padding: '1rem',
                        height: '390px', 
                        width: '100%', 
                        // overflow:'auto', 
                        marginTop: '3rem'
                        }}>

                        <div style={{height: '100%', width: '100%', overflow:'auto'}}>

                            {MySentences && MySentences.map((sen, index) => (

                                
                                <SentenceCard key={index} sentences={sen} mySentence />

                            ))}

                        </div>

                </div>

        </div>
        </>
    )
}

export default MySentencePage
