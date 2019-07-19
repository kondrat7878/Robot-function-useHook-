import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/app/App';
import {Store} from './components/store/store';
import App from './components/app/app';




ReactDOM.render(
    < Store>
        <App/>
    </Store>
    , document.getElementById('root'));



