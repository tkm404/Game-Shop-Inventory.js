import React from "react";
import PropTypes from "prop-types";

function Pallet(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenPalletSelected(props.id)}>
      <h3>{props.name}</h3>
      <h3>Genre: {props.genre}</h3>
      <p><em>${props.price} - item ct.: {props.quantity}</em></p>
      <hr />       
      </div>

    </React.Fragment>
  );
}

Pallet.propTypes = {
  name: PropTypes.string,
  genre: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenPalletClicked: PropTypes.func
  // accolade: PropTypes.string
}

export default Pallet;