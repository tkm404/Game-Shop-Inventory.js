import React from "react";
import PropTypes from "prop-types";
import CreUpForm from "./CreUpForm";
import {v4} from "uuid";

function AddPalletForm(props){

  function handleAddingNewPalletToList(event) {
    event.preventDefault();
    props.onNewPalletAddition({
      name: event.target.name.value,
      genre: event.target.genre.value,
      price: event.target.price.value,
      accolade: event.target.accolade.value,
      id: v4()
    });
  }
  return (
      <React.Fragment>
    <p>psst, hey kid. You wanna buy some Pallets?</p>
    <CreUpForm 
      formSubmissionHandler={handleAddingNewPalletToList}
      buttonText="Selection Made"
      />
  </React.Fragment>
  )
}

AddPalletForm.propTypes = {
  onNewPalletAddition: PropTypes.func
}
export default AddPalletForm;