import React from "react";
import PropTypes from "prop-types";

function PalletDetail(props){
  const { pallet } = props;


return (
  <React.Fragment>
    <h1>Pallet Detail</h1>
    <h3>{pallet.name} - {pallet.genre}</h3>
    <p><em>${pallet.price} - item ct.: {pallet.quantity}</em></p>
    <hr />
    <form onSubmit={props.onBuyGameFromPallet}>
      <label>Buy Games:
        <br></br>
      <input type="number" name="quantity" min='0' max={pallet.quantity}/>
      </label>
    </form>

  </React.Fragment>
);
}

PalletDetail.propTypes = {
  pallet: PropTypes.object
}

export default PalletDetail;