import React from "react";
import PropTypes from "prop-types";

function CreUpForm(props){
  return(
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <label>Game Name: 
        <input name="name" placeholder="game name"/>
        </label>
        <label>Game Price: 
        <input type="number" name="price"/>
        </label>
        <label>Game Genre:
        <select name="genreSelect">
          <option value="">Select a Game Genre</option>
          <option value="puzzle" >Puzzle</option>
          <option value="strategy" >Strategy</option>
          <option value="dexterity" >Dexterity</option>
        </select>
        </label>
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