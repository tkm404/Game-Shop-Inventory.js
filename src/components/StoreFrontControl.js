import React from "react";
import StoreFrontList from './StoreFrontList';
import AddPalletForm from './AddPalletForm';
import PuzzleMenu from './PuzzleMenu';
import StrategyMenu from "./StrategyMenu";
import DexMenu from "./DexMenu";
import PalletDetail from './PalletDetail'
import SelectGenreForm from "./SelectGenreForm";
import BuyGamesForm from "./BuyGamesForm";

class StoreFrontControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      addDetailsFormVisible: false,
      mainPalletList: [],
      detailMenu: 0,
      puzzleMenu: false,
      strategyMenu: false,
      dexterityMenu: false,
      selectedPallet: null,
      userInput: '',
      decrementBy: false
    };
  }



  handleClick = () => {
      if (this.state.selectedPallet != null) {
        this.setState({
          formVisibleOnPage: false,
          selectedPallet: null
        });
      } else this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
        detailMenu: 0
    }));
  }

  handleAChange = (event) => {
    this.setState({
      userInput: event.target.value
    });
  }

  handleMenuClick = () => {
    if (this.state.detailMenu >= 4) {
      this.setState(prevState => ({
        detailMenu: prevState.detailMenu - 3

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

  handleChangingSelectedPallet = (id) => {
    const selectedPallet = this.state.mainPalletList.filter(pallet => pallet.id === id)[0];
    this.setState({ selectedPallet: selectedPallet });
  }


  handleGoToAddPallet = (event) => {
    event.preventDefault();
    this.setState({
      addDetailsFormVisible: true,
      formVisibleOnPage: false,
      detailMenu: 0
    })
  }

  handleGoToFormStart = () => {
    this.setState({
      formVisibleOnPage: false,
      addDetailsFormVisible: false,
      detailMenu: 0,
      puzzleMenu: false,
      strategyMenu: false,
      dexterityMenu: false,
      userInput: '',
      selectedPallet: null
    });
  }

  handleDecrementBy = () => {
    console.log(this.state.decrementBy)
    this.setState({decrementBy: true})
    
  }

  handlePurchaseResult = (palletBoughtFrom) => {
    const purchasedFromMainPalletList = this.state.mainPalletList.filter(pallet => pallet.id !== this.state.selectedPallet.id).concat(palletBoughtFrom);
    this.setState({
      mainPalletList: purchasedFromMainPalletList,
      decrementBy: false,
      selectedPallet: null
    })
  }


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let menuButtonText = null;


    if (this.state.decrementBy){
      currentlyVisibleState = <BuyGamesForm pallet = {this.state.selectedPallet} onPurchase={this.handlePurchaseResult}/>
      buttonText = "Return to Available Games"
      menuButtonText = "x"
    }
    else if (this.state.selectedPallet != null && this.state.decrementBy === false) {
      currentlyVisibleState = <PalletDetail pallet={this.state.selectedPallet} onUpdateQuantity={this.handleDecrementBy}/>
      
      buttonText = "Return to Available Games"
      menuButtonText = "x"
    }
    else if (this.state.detailMenu === 3) {
      currentlyVisibleState =
        <DexMenu palletList={this.state.mainPalletList} byDex={this.state.mainPalletList.filter(pallet => pallet.genre === "Dexterity")} onPalletSelection={this.handleChangingSelectedPallet} />
      buttonText = "Return to Available Games"
      menuButtonText = "x"
    }
    else if (this.state.detailMenu === 2) {
      currentlyVisibleState =
        <StrategyMenu palletLIst={this.state.mainPalletList} byStrategy={this.state.mainPalletList.filter(pallet => pallet.genre === "Strategy")} onPalletSelection={this.handleChangingSelectedPallet} />
      buttonText = "Return to Available Games";
      menuButtonText = "See games by category: Dexterity";
    } else if (this.state.detailMenu === 1) {
      currentlyVisibleState =
        <PuzzleMenu palletList={this.state.mainPalletList} byPuzzles={this.state.mainPalletList.filter(pallet => pallet.genre === "Puzzle")} onPalletSelection={this.handleChangingSelectedPallet} />
      buttonText = "Return to Available Games";
      menuButtonText = "See games by category: Strategy";
    } else if (this.state.formVisibleOnPage && this.state.detailMenu === 0) {
      currentlyVisibleState =

        <StoreFrontList palletList={this.state.mainPalletList} onPalletSelection={this.handleChangingSelectedPallet} />

      buttonText = "Return to Available Games";
      menuButtonText = "See games by category: Puzzles";

    } else if (this.state.addDetailsFormVisible) {
      currentlyVisibleState =
        <React.Fragment>
          <AddPalletForm
            onNewPalletAddition={this.handleAddingNewPalletToList} selectedGenre={this.state.userInput} defaultQuantity={130} />
          <button onClick={this.handleGoToFormStart}>Order New Pallet</button>
        </React.Fragment>
      buttonText = "Return to Available Games";
      menuButtonText = "See games by category: Puzzles"
    }
    else {
      currentlyVisibleState =
        <SelectGenreForm
          onNewGenreSelection={this.handleGoToAddPallet} onSelect={this.handleAChange} input={this.state.userInput} />
      buttonText = "Return to Available Games"
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