import React from "react";
import CreUpForm from "./CreUpForm";

function AddPalletForm(props){
  return (
      <React.Fragment>
    <p>psst, hey kid. You wanna buy some Pallets?</p>
    <CreUpForm 
      formSubmissionHandler
      />
  </React.Fragment>
  )
}

export default AddPalletForm;