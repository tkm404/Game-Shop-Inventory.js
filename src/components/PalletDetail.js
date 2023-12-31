import React from "react";
import PropTypes from "prop-types";



function PalletDetail(props) {
  const { pallet, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Pallet Detail</h1>
      <h3>{pallet.name} - {pallet.genre}</h3>
      <p><em>${pallet.price} - item ct.: {pallet.quantity}</em></p>

      <button onClick={() => onClickingDelete(pallet.id)}>Delete Pallet</button>
      <button onClick={props.onUpdateQuantity}>Sell Games</button>
      <hr />

    </React.Fragment>
  );
}

PalletDetail.propTypes = {
  pallet: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onUpdateQunatity: PropTypes.func
}

export default PalletDetail;