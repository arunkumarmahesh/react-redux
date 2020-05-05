import React from 'react';
import { Provider } from 'react-redux';
//import logo from './logo.svg';
import './App.css';
import store from './Store-1/store';

//import ReduxHooksComponent from './ReduxHooksComponent';

import Users from './Users';
//import User1 from './User1';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ReduxHooksComponent /> */}
          <Users />
        </header>
      </div>
    </Provider>
  );
};

export default App;
