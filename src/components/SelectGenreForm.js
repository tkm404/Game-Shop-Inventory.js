import React from "react";
import PropTypes from "prop-types";

function SelectGenreForm(props) {
  return (
      <form onSubmit={props.onNewGenreSelection}>
        <select value={props.input} onChange={props.onSelect}>
          <option value="" disabled={true}>Select a Genre</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Strategy">Strategy</option>
          <option value="Dexterity">Dexterity</option>
        </select>
        <br></br>
        <button type="submit">Choose Genre</button>
      </form>
  )
}

SelectGenreForm.propTypes = {
  onNewGenreSelection: PropTypes.func,
  onSelect: PropTypes.func,
  input: PropTypes.string
}

export default SelectGenreForm;

