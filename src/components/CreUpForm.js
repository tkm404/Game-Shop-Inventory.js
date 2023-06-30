import React from "react";
import PropTypes from "prop-types";

function CreUpForm(props){
  return(
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <label>Game Name: </label>
        <input type="text" name="name" placeholder="game name"/>
        <label>Game Price: </label>
        <input type="number" name="price"/>
        <label>Game Genre:</label>
        <select value={props.formInput} onChange={props.handleFormChange}>
          <option value="" disabled="true">Select a Game Genre</option>
          <option value="genre" >Puzzle</option>
          <option value="genre" >Strategy</option>
          <option value="genre" >Dexterity</option>
        </select>
        <label>"Spiel des Jahres" Winner:</label>
        <input type="radio" value="'Spiel des Jahres' Winner" name="'Spiel des Jahres' Winner">"Spiel des Jahres" Winner</input>
        <input type="radio" value="No Accolades" name="No Accolades">No Accolades</input>
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

CreUpForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default CreUpForm;