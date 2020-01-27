import React from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import './App.css';

import ConnectedArena from './container/Arena';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>ARENA </h1>
          <ConnectedArena />
        </div>
      </Provider>
    );
  }
}

export default App;
