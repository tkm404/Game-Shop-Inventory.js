import React from "react";
import PropTypes from "prop-types";

function CreUpForm(props){
  return(
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <select value={props.formInput} onChange={props.handleFormChange}>
          <option value="" disabled="true">Select a Game Genre</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Strategy">Strategy</option>
          <option value="Dexterity">Dexterity</option>
        </select>
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

export default CreUpForm;