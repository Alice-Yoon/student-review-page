import React, {useEffect} from 'react'

function CardLists({data}) {

    const {date, title, desc, id} = data;

    useEffect(() => {
        console.log(date, title)
    }, [])


    return (
        <div style={{
                backgroundColor: '#fff',
                border: '1px solid black',
                maxWidth: '550px',
                padding: '1rem',
                marginBottom: '3rem'
            }}>

                <h2><strong>{date} |</strong> {title}</h2>

                <p>{desc}</p>

                <div style={{display:'flex', justifyContent:'flex-end'}}>
                    <a href={`/classreview/${id}`}><button className="more_btn">More</button></a>
                </div>

        </div>
    )
}

export default CardLists
