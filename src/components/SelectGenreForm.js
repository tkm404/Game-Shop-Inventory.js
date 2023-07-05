import React from "react";
import PropTypes from "prop-types";

function SelectGenreForm(props) {
  return (
    <label> Select a Genre:
      <form onSubmit={props.onNewGenreSelection}>
        <select value={props.input} onChange={props.onSelect}>
          <option value="Puzzle">Puzzle</option>
          <option value="Strategy">Strategy</option>
          <option value="Dexterity">Dexterity</option>
        </select>
        <br></br>
        <button type="submit">Choose Genre</button>
      </form>
    </label>
  )
}

SelectGenreForm.propTypes = {
  onNewGenreSelection: PropTypes.func,
  onSelect: PropTypes.func,
  input: PropTypes.string
}

export default SelectGenreForm;

