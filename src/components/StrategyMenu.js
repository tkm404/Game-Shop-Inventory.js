import React from "react";
import Pallet from "./Pallet";
import PropTypes from "prop-types"


function StrategyMenu(props) {
  return (
    <React.Fragment>
      <hr />

      {props.byStrategy.map((pallet) =>
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

StrategyMenu.propTypes = {
  palletList: PropTypes.array
};

export default StrategyMenu