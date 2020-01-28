import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store/configureStore';
import './App.css';

import ConnectedArena from './container/Arena';
import ConnectedScores from './container/Scores';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <h1>ARENA </h1>
            <Route exact path="/" render={() => <ConnectedArena />} />
            <Route exact path="/scores" render={() => <ConnectedScores />} />
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
