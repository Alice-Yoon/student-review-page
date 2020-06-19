import React, {useState, useEffect} from 'react';
import CardLists from './Sections/CardLists';
import NavBar from '../NavBar/NavBar';
import alice_rabbit from '../../img/alice_rabbit.png';

import {data} from '../../../sentenceData';


function LandingPage() {

    const [Data, setData] = useState([]);



    useEffect(() => {

        // console.log(data)
        
        setData(data);

    }, [])




    return (
        <>
        <NavBar landingPage />

        {/* Left Side */}
        <div>
            <div style={{
                // border:'1px solid aqua', 
                display:'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                height: '680px',
                backgroundColor: '#e6e6e6'
                }}>

                <div style={{
                        // border: '1px solid red',
                        borderRight: '2px solid black',
                        display: 'flex',
                        flexDirection:'column',
                        // justifyContent: 'center',
                        alignItems:'center'
                    }}>

                        <div style={{
                            // border:'1px solid yellow',
                            marginTop: '5rem',
                            width: '380px',
                            height: '380px'
                            }}>
                            <img src={alice_rabbit} alt='alice_rabbit' style={{
                                width: '100%',
                                height: '100%',
                            }} />
                        </div>

                        <div style={{
                                // border: '1px solid green', 
                                // textAlign:'center',
                                marginTop: '2rem'                                
                            }}>
                                <h2>Welcome, Suzy !</h2>
                                <p>" Let's review today's lesson :) "</p>
                        </div>
                </div>

                {/* Right Side */}
                <div style={{
                        // border: '1px solid blue',
                        height: '600px',
                        padding: '2rem',
                        overflow: 'auto'
                    }}>

                    {Data && Data.map((data, index) => (

                        <CardLists key={index} data={data} />
                    ))}
                    
                </div>

            </div>
        </div>
        </>
    )
}

export default LandingPage
