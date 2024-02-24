import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Context} from './Context';
import { DataInfo } from './Context';
import { BrowserRouter } from 'react-router-dom';
import "@fontsource/montserrat"; 
import "@fontsource/montserrat/400.css"; 
import "@fontsource/montserrat/400-italic.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
<DataInfo>
    <App />
    </DataInfo>
    </BrowserRouter>
);


