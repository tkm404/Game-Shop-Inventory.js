import React from "react";
import Pallet from "./Pallet";
import PropTypes from "prop-types"
import { v4 } from "uuid";

function StoreFrontList(props){
  return(
      <React.Fragment>
    <hr />
    {props.palletList.map((pallet) =>
      <Pallet 
        name={pallet.name}
        genre={pallet.genre}
        price={pallet.price}
        accolade={pallet.accolade}
        id={pallet.id} />)}
  </React.Fragment>
  )

}

StoreFrontList.propTypes = {
  palletList: PropTypes.array
};

export default StoreFrontList;