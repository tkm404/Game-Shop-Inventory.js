import React from "react";
import PropTypes from "prop-types";

function Pallet(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <h3>Genre: {props.genre}</h3>
      <p><em>${props.price} - item ct.: {props.quantity}</em></p>
      <hr />
    </React.Fragment>
  )
}

Pallet.propTypes = {
  name: PropTypes.string,
  genre: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number
  // accolade: PropTypes.string
}

export default Pallet;