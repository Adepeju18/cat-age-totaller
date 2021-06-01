import React, { useState } from 'react';


export default function AgeCounter(props){
    const[currentAge, setCurrentAge]= useState(0);
    const catAge = currentAge < 9 ? "young":"old";
    function updateTheAge(changeBy){
        setCurrentAge(currentAge + changeBy);
        props.update(changeBy);

    }
    return(
        <div className ={`AgeCounter ${catAge}`} >
            
            <h4>{props.cat}</h4>
            <h3>{currentAge}</h3>
            <button onClick={() => updateTheAge(1)}>Add year</button>
            <button onClick={() => updateTheAge(-currentAge)}>New life</button>
        </div>
    );
        
        
    
    
}