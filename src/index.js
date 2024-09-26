import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Funtions from './Components/funtions';
import Pila from './Components/challenges/pila';
import filas from './Components/challenges/filas';
import arbol from './Components/challenges/arbol';
import GifGrid from './Components/GifGrid';
import { Father } from './Components/challenges/challenge8/Father';
import { TodoApp } from './Components/challenges/challenge9/TodoApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <TodoApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
