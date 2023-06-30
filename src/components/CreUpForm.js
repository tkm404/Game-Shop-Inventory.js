import React from "react";
import PropTypes from "prop-types";

function CreUpForm(props){
  return(
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <label>Game Name: 
          <br></br>
        <input name="name" placeholder="game name"/>
        </label>
        <br></br>
        <label>Game Price:
          <br></br> 
        <input type="number" name="price"/>
        </label>
        <br></br>
        <label>Game Genre:
          <br></br>
          <label>Puzzle <input type="checkbox" value="puzzle" /></label>
          <label>Strategy <input type="checkbox" value="strategy" /></label>
          <label>Dexterity <input type="checkbox" value="dexterity" /></label>
        </label>
        <br></br>
        <label>Accolades:
          <br></br>
        <label>"Spiel des Jahres" Winner:<input type="radio" value="'Spiel des Jahres' Winner" name="'Spiel des Jahres' Winner"/> </label>
        <br></br>
        <label>No Accolades<input type="radio" value="No Accolades" name="No Accolades"/></label>
        </label>
        <br></br>
        <button type="submit">{props.buttonText}</button>
      </form>
      <hr />
    </React.Fragment>
  )
}

CreUpForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default CreUpForm;