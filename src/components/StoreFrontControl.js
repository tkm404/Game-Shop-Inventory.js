import React from "react";
import StoreFrontList from './StoreFrontList'
import AddPalletForm from './AddPalletForm'

class StoreFrontControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectionMade: '',
      mainPalletList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }


  handleAddingNewPalletToList = (newPallet) => {
    const newMainPalletList = this.state.mainPalletList.concat(newPallet);
    this.setState({mainPalletList: newMainPalletList,
                  formVisibleOnPage: false});
  }



  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState =
        <StoreFrontList palletList={this.state.mainPalletList}/>
      buttonText = "Return to Order Form"
    } else {
      currentlyVisibleState =
        <AddPalletForm onNewPalletAddition={this.handleAddingNewPalletToList}/>
      buttonText = "Return to Available Games";
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