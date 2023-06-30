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
      // accolade: event.target.accolade.value,
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
          {/* <select value={props.selectionInput} onChange={props.handleSelectChange}>
            <option value="" disabled={true}>Select a Genre</option>
            <option value="Puzzle">Puzzle</option>
            <option value="Strategy">Strategy</option>
            <option value="Dexterity">Dexterity</option>
          </select> */}
        </label>
        <br></br>
        {/* <label>Accolades:
          <br></br>
          "Spiel des Jahres" Winner:<input type="radio" value="'Spiel des Jahres' Winner" name="'Spiel des Jahres' Winner" />
          <br></br>
          No Accolades<input type="radio" value="No Accolades" name="No Accolades" />
        </label> */}
        <br></br>
        <button type="submit">Add Pallet of Games</button>
      </form>
      <hr />
    </React.Fragment>
  )
}

AddPalletForm.propTypes = {
  onNewPalletAddition: PropTypes.func,
  // onRadioBoxChange: PropTypes.func
}
export default AddPalletForm;