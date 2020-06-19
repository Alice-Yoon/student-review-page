import React, {useState} from 'react';
import './sentencecard.css'

function SentenceCard({sentences, mySentence}) {

    const [ToggleColor, setToggleColor] = useState(false)

    const onClickToggleColor = () => {
        setToggleColor(!ToggleColor)
    }

    return (
        <div>
            <div style={{
                        border: '1px solid black',
                        backgroundColor:'#fff',
                        boxShadow:'0 2px 3px rgba(0,0,0,0.3)',
                        borderRadius: '5px',
                        marginBottom: '2rem',
                        padding: '10px'
                        }}
                    >
            
            {/* Korean Sentence */}
                    <div style={{
                                // border:'2px solid pink',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                        <h3>{sentences.no}. {sentences.kor}</h3>
                        <div>
                                <button className="add-btn">{mySentence ? "Del" : "Add"}</button>
                        </div> 
                    </div>

            {/* English Sentence */}
                    <div style={{
                            // border:'2px solid pink',
                            borderTop: '1px dotted gray',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>

                        <p style={{
                            fontWeight: 'bold',
                            paddingLeft: '3rem',
                            fontSize: '1.5rem',
                            color: ToggleColor ? "red" : "white"
                            }}>
                                {sentences.eng}
                        </p>

    
                        <div className="buttons">
                            <div>
                                <button onClick={onClickToggleColor}>{ToggleColor ? "Hide" : "Show"}</button>
                            </div>
                        </div>

                    </div>

            </div>
        </div>
    )
}

export default SentenceCard
