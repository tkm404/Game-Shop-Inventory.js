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
      detailMenu: 0,
      puzzleMenu: false,
      strategyMenu: false,
      dexterityMenu: false,
    };
  }

  

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
      detailMenu: 0
    }));
  }

  handleMenuClick = () => {
    if (this.state.detailMenu >= 3) {
      this.setState(prevState => ({
        detailMenu: prevState.detailMenu - 2
        
      }))
    } else {
      this.setState(prevState => ({
        detailMenu: prevState.detailMenu + 1
      }));
    }
    console.log(this.state.detailMenu)
  }

  handleAddingNewPalletToList = (newPallet) => {
    const newMainPalletList = this.state.mainPalletList.concat(newPallet);
    this.setState({
      mainPalletList: newMainPalletList,
      formVisibleOnPage: true,
      detailMenu: 0
    });
  }



  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let menuButtonText = null;

    if (this.state.detailMenu === 2) {
      currentlyVisibleState =
        <p>Placeholder</p>
      buttonText = "Return to Available Games";
      menuButtonText = "See games by category: Dexterity";
    } else if (this.state.detailMenu === 1) {
      currentlyVisibleState =
        <PuzzleMenu palletList={this.state.mainPalletList} byPuzzles={this.state.mainPalletList.filter(pallet => pallet.genre === "Puzzle")}/>
      buttonText = "Return to Available Games";
      menuButtonText = "See games by category: Strategy";
    } else if (this.state.formVisibleOnPage && this.state.detailMenu === 0) {
      currentlyVisibleState =
        <StoreFrontList palletList={this.state.mainPalletList} />
      buttonText = "Return to Order Form";
      menuButtonText = "See games by category: Puzzles";

    } else {
      currentlyVisibleState =
        <AddPalletForm
          selectionInput={this.state.selectionInput}
          onSelectionChange={this.handleSelectChange}
          onNewPalletAddition={this.handleAddingNewPalletToList} />

      buttonText = "Return to Available Games";
      menuButtonText = "See games by category: Puzzles"
    }
    return (

      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
        <button onClick={this.handleMenuClick}>{menuButtonText}</button>

      </React.Fragment>
    )
  }
}

export default StoreFrontControl;