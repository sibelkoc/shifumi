import React from 'react'

 const AllHands = (props) => {
     return (
         <img onClick={props.function} name={props.img} src={`./img/${props.img}.png`} alt=""/>
     )
 }

 export default AllHands;