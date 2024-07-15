
import React from 'react';
import BasicWheel from '../components/BasicWheel';

export default function MediumTricks() {
    return (
        <main>
        <div>
            <h1>Wheel of Medium Tricks</h1>
            <p>
            A simple wheel of medium skateboarding tricks. Click the spin
            button to spin the wheel and see what Trick you must to land. try it!
            Only for fun and practice.
            </p>
        </div>
        <div style={{textAlign:"center"}}>
             <BasicWheel data={data}/>
        </div>  
        </main>
    );
    }