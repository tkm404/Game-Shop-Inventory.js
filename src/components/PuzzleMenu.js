import React from "react";
import Pallet from "./Pallet";
import PropTypes from "prop-types"


function PuzzleMenu(props) {
  return (
    <React.Fragment>
      <hr />

      {props.byPuzzles.map((pallet) =>
        <Pallet
          whenPalletSelected={props.onPalletSelection}
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

PuzzleMenu.propTypes = {
  palletList: PropTypes.array,
  onPalletSelection: PropTypes.func
};

export default PuzzleMenu