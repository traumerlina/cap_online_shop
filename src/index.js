import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import { store } from './redux';
import CapsContext from './components/context';
import CapService from './services';
import App from './components/app';

const capsService = new CapService();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CapsContext.Provider value={capsService}>
      <Provider store={store}>
        <Router>
          <App/>
        </Router>
      </Provider>
    </CapsContext.Provider>
  </React.StrictMode>
);
