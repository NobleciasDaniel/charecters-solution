import {akitaDevtools} from "@datorama/akita";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {CharacterServices} from "./services/character.service";

akitaDevtools();

ReactDOM.render(
  <React.StrictMode>
      <span>Hello World</span>
  </React.StrictMode>,
  document.getElementById('root')
);

setTimeout( () => {
    CharacterServices.getCharacters();
}, 5000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
