import React from "react";
import StoreFrontList from './StoreFrontList'
import AddPalletForm from './AddPalletForm'

class StoreFrontControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };

  }

  render(){
    let currentlyVisibleState = null;
      if (this.state.formVisibleOnPage) {
        currentlyVisibleState = 
        <StoreFrontList />
      } else {
        currentlyVisibleState = 
        <AddPalletForm />
      }
    return(
      
      <React.Fragment>
        {currentlyVisibleState}

      </React.Fragment>
    )
  }
}

export default StoreFrontControl;