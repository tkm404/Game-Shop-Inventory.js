import React from "react";

function Pallet(props){
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p><em>{props.price}</em></p>
      <ul>
        <li>{props.genre}</li>
        <li>{props.accolade}</li>
      </ul>
    </React.Fragment>
  )
}

export default Pallet;