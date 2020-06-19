import React from 'react';
import './navBar.css'

function NavBar({landingPage, mySentence}) {

    if(landingPage) {

        return (
            <header style={{
                        // border: '1px solid black', 
                        borderBottom: '2px solid black',
                        display:'flex', 
                        justifyContent: 'space-between', 
                        alignItems:'center', 
                        padding: '0 3rem',
                        backgroundColor: '#e6e6e6'
                    }}>
    
                    <h3 className="ladning_menu">Today's Date</h3>
                    
                    <a href={'/'}>
                        <h1 className="landing_logo">Wonderland</h1>
                    </a>
                    
                    <a href={'/mySentence'}>
                        <h3 className="ladning_menu">My Sentences</h3>
                    </a>
                    
            </header>
        )

    } else if(mySentence) {

        return (
            <header style={{
                        // border: '1px solid black', 
                        // borderBottom: '2px solid black',
                        display:'flex', 
                        justifyContent: 'space-between', 
                        alignItems:'center', 
                        padding: '0 1rem',
                        backgroundColor: 'black',
                        height: '75px'
                    }}>
                        
                    <a href={'/'}>
                        <h1 className="logo">Wonderland</h1>
                    </a>
                    
            </header>
        )


    } else {

        return (
            <header style={{
                        // border: '1px solid black', 
                        // borderBottom: '2px solid black',
                        display:'flex', 
                        justifyContent: 'space-between', 
                        alignItems:'center', 
                        padding: '0 1rem',
                        backgroundColor: 'black',
                        height: '75px'
                    }}>
                        
                    <a href={'/'}>
                        <h1 className="logo">Wonderland</h1>
                    </a>
                    
                    <a href={'/mySentence'}>
                        <h3 style={{color: 'white'}} className="menu">My Sentences</h3>
                    </a>
                    
            </header>
        )


    }
}

export default NavBar
