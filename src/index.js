import React from 'react';
import ReactDOM from 'react-dom/client';
 import './index.css';
import App from './App';
 import store from "./app/store";
 import { provider, storage}  from "react-redux";
import Login from './components/Login';
//import { provider, storage }  from "../firebase";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <provider store={storage} >
    <App />
    </provider>
);
// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );
//store={storage}

