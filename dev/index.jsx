
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import Map from './map';
import './css/style.css';

document.addEventListener('DOMContentLoaded', () => {


    //window.__root_container = document.getElementById('root');
    //ReactDOM.render(<Root/>, window.__root_container);
    const root = document.createElement('div');
    document.body.appendChild(root);
    ReactDOM.render(<Map/>, root);

});
