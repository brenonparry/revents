import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

const render = () => {
  ReactDOM.render(<App />, rootElement);
}

if (module.hot) {
  module.hot.accept('./App.jsx', () => {setTimeout(render)}); 
}
