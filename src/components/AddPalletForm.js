import React from "react";
import PropTypes from "prop-types";
// import CreUpForm from "./CreUpForm";
import { v4 } from "uuid";

function AddPalletForm(props) {

  function handleAddingNewPalletToList(event) {
    event.preventDefault();
    props.onNewPalletAddition({
      name: event.target.name.value,
      genre: event.target.genre.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      id: v4()

    });
  }
  return (

    <React.Fragment>
      <p>psst, hey kid. You wanna buy some Pallets?</p>
      <form onSubmit={handleAddingNewPalletToList}>
        <label>Game Name:
          <br></br>
          <input name="name" placeholder="game name" />
        </label>
        <br></br>
        <label>Game Price:
          <br></br>
          <input type="number" name="price" />
        </label>
        <br></br>
        <label>Game Genre:
          <br></br>
          <input name="genre" placeholder="game genre (e.g. strategy)" />
        </label>
        <br></br>
        <label>
          Quantity Per Pallet:
          <br></br>
          <input name="quantity" type="number" defaultValue='130' />
        </label>
        <br></br>
        <button type="submit">Add Pallet of Games</button>
      </form>
      <hr />
    </React.Fragment>
  )
}

AddPalletForm.propTypes = {
  onNewPalletAddition: PropTypes.func,
}
export default AddPalletForm;