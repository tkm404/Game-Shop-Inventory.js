import React from "react";
import Pallet from "./Pallet";
import PropTypes from "prop-types"

function StoreFrontList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.palletList.map((pallet) =>
        <Pallet
          whenPalletSelected = {props.onPalletSelection}
          name={pallet.name}
          genre={pallet.genre}
          price={pallet.price}
          quantity={pallet.quantity}
          id={pallet.id}
          key={pallet.id} />)}
      <hr />
    </React.Fragment>
  )

}

StoreFrontList.propTypes = {
  palletList: PropTypes.array
};

export default StoreFrontList;