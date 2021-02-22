import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./Appjspdf";
import HtmlToPdf from "./AppComponentPdf";
import App1 from './AppReactToPdf';
import MyApp from './AppReactPdf';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/*<HtmlToPdf />*/}
    {/*<MyApp/>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
