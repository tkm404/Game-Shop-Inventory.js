import './App.css';
import React from 'react';
import Header from './Header';
import StoreFrontControl from './StoreFrontControl'

function App() {
  return (
    <div className="App">
      
        <React.Fragment>
          <Header />
          <StoreFrontControl />
        </React.Fragment>
    </div>
  );
}

export default App;
