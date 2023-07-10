import React from "react";
import PropTypes from "prop-types";



function BuyGamesForm(props) {
  const { pallet } = props;

  function handlePurchaseSubmit(event) {
    event.preventDefault();
    props.onPurchase({
      name: pallet.name,
      price: parseInt(pallet.price),
      genre: pallet.genre,
      id: pallet.id,

      quantity: parseInt(pallet.quantity - event.target.quantity.value)


    })
  }
  return (
    <React.Fragment>
      <form onSubmit={handlePurchaseSubmit}>
        <label>Game Name:
          <br></br>
          <input name="name" value={pallet.name} readOnly />
        </label>
        <br></br>
        <label>Game Price:
          <br></br>
          <input type="number" name="price" value={pallet.price} readOnly />
        </label>
        <br></br>
        <label>Game Genre:
          <br></br>
          <input name="genre" value={pallet.genre} readOnly />

        </label>
        <br></br>
        <label>
          Quantity to Purchase:
          <br></br>
          <input name="quantity" type="number" min='0' max={pallet.quantity} />
        </label>
        <br></br>
        <button type="submit">Sell Games</button>
      </form>
      <hr />
    </React.Fragment>
  )
}

BuyGamesForm.propTypes = {
  pallet: PropTypes.object,
  onPurchase: PropTypes.func
}


export default BuyGamesForm;