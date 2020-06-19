import React, {useEffect, useState} from 'react';
import SentenceCard from '../commons/SentenceCard';
import {data} from '../../../sentenceData';

import NavBar from '../NavBar/NavBar';




function ClassReviewPage({match}) {

    const id = match.params.id;

    const [CurrentData, setCurrentData] = useState([])
    const [CurrentSentences, setCurrentSentences] = useState([])


    useEffect(() => {

        console.log("total data", data)
        console.log(match, id)

        const currentData = data.filter(sen => sen.id === +id)
        
        
        setCurrentData(currentData[0])
        setCurrentSentences(currentData[0].sentences)
        
        console.log("data:", currentData[0])
        console.log("sen:", currentData[0].sentences)
       
    }, [])

    return (

        <>
        <NavBar />
        <div style={{
                // border:'1px solid red',
                width: '85%', 
                margin: '5rem auto'
            }}>

                {/* Title */}
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <strong style={{display:'inline', fontSize: '1.5rem'}}>{CurrentData.date} | </strong>
                    <p>{CurrentData.title}(교재명 - Unit)</p>
                </div>


                <hr />

                <div style={{textAlign: 'center', margin: '2.5rem'}}>
                    <p>"Sentences you learned today are ...."</p>
                </div>

                {/* Body */}
                <div style={{
                        // border: '1px solid red',
                        borderRadius:'5px', 
                        backgroundColor:'#e6e6e6', 
                        padding: '1rem',
                        height: '390px', 
                        width: '100%', 
                        // overflow:'auto', 
                        }}>

                        <div style={{height: '100%', width: '100%', overflow:'auto'}}>

                            {CurrentSentences && CurrentSentences.map((sen, index) => (

                                
                                <SentenceCard key={index} sentences={sen} />

                            ))}

                        </div>

                </div>

        </div>
        </>
    )
}

export default ClassReviewPage
