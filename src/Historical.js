import React from "react";

const Historical = (props) => {
    return (
        <div>
        <h4>{props.nom}</h4>

        <img src={`./img/${props.theHand}.png`} alt="the all hands"/>
        
        </div>
    )
}



export default Historical;