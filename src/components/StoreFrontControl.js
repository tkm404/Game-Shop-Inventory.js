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

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }



  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState =
        <StoreFrontList />
      buttonText = "Return to Available Games"
    } else {
      currentlyVisibleState =
        <AddPalletForm />
      buttonText = "Buy Pallet";
    }
    return (

      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default StoreFrontControl;