import React from 'react';
import reactDOM from 'react-dom';
import './index.css'
import App from './App';
import { Provider } from 'react-redux';
import Store from './Store';
import { BrowserRouter } from 'react-router-dom';


reactDOM.render(<Provider store={Store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</Provider>,document.getElementById('root'))