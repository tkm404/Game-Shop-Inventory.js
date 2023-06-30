import React from "react";
import StoreFrontList from './StoreFrontList'
import AddPalletForm from './AddPalletForm'
import PuzzleMenu from './PuzzleMenu'

class StoreFrontControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainPalletList: [],
      puzzleMenu: false,
      strategyMenu: false,
      dexterityMenu: false,
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
      puzzleMenu: false
    }));
  }

  handlePuzzleClick = () => {
    this.setState(prevState => ({
      puzzleMenu: !prevState.puzzleMenu
    }));
  }

  handleAddingNewPalletToList = (newPallet) => {
    const newMainPalletList = this.state.mainPalletList.concat(newPallet);
    this.setState({mainPalletList: newMainPalletList,
                  formVisibleOnPage: true,
                  puzzleMenu: false});
  }



  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.puzzleMenu) {
      <PuzzleMenu />
      buttonText = "Return to Available Games";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState =
        <StoreFrontList palletList={this.state.mainPalletList}/>
      buttonText = "Return to Order Form";
      
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
        <button onClick={this.handlePuzzleClick}>See Puzzles</button>
        
      </React.Fragment>
    )
  }
}

export default StoreFrontControl;