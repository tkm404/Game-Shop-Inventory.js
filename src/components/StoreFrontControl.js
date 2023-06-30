import React from "react";
import StoreFrontList from './StoreFrontList'
import AddPalletForm from './AddPalletForm'

class StoreFrontControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainPalletList: []
      
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  // handleSelectChange = (event) => {
  //   this.setState({
  //   checkBoxInput: event.target.value
  //   });
  // }

  // handleRadioChange = (event) => {
  //   this.setState({
  //     radioBoxInput: event.target.value
  //   });
  // }

  handleAddingNewPalletToList = (newPallet) => {
    const newMainPalletList = this.state.mainPalletList.concat(newPallet);
    this.setState({mainPalletList: newMainPalletList,
                  formVisibleOnPage: true});
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
        <AddPalletForm
        selectionInput={this.state.selectionInput} 
        onSelectionChange ={this.handleSelectChange}
        onNewPalletAddition={this.handleAddingNewPalletToList}/>

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