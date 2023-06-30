import React from "react";
import StoreFrontList from './StoreFrontList'

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
        currentlyVisibleState = <StoreFrontList />
      } else {
        currentlyVisibleState = 
        <React.Fragment>
          <p>Placeholder</p>
        </React.Fragment>
      }
    return(
      
      <React.Fragment>
        {currentlyVisibleState}

      </React.Fragment>
    )
  }
}

export default StoreFrontControl;