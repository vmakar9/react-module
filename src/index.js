import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {setupStore} from "./redux/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

const store = setupStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
const themes = {
    dark: {
        background: '#18171B',
        color: 'white'
    },
    light: {
        background: '#ffdead',
        color: 'black'
    }
}
const ThemeContext= createContext(themes)
root.render(
<ThemeContext.Provider value={themes}>
 <Provider store={store}>
     <BrowserRouter>
    <App />
     </BrowserRouter>
 </Provider>
</ThemeContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
