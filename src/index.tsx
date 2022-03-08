import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assets/css/materialdesignicons.min.css';
import '../src/assets/css/style.css';
import '../src/assets/css/vendor.bundle.base.css';
import '../src/assets/css/vendor.bundle.base.css';
import '../src/assets/font-awesome/css/font-awesome.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { compose, createStore } from 'redux';
import RootReducer from './redux/reducers/RootReducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";
import Store from './redux/store/Store';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
