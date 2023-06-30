import React from "react";
import PropTypes from "prop-types";

function CreUpForm(props){
  return(
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          />
      </form>
    </React.Fragment>
  )
}