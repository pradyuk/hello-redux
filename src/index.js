import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./store";

const render = () => ReactDOM.render(<App />, document.getElementById('root'));
render();

// render is the listener function called whenever state of the store updates/changes, so here, whenever there is a change to the store,
// entire app is re-rendered
store.subscribe(render)