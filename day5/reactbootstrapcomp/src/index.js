import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App,{Breadcrumps, Btngroup,Overlays,Pgination, Toasts} from './App';
import reportWebVitals from './reportWebVitals';
import Controlledtabs, { Justifiedtabs, Pilltabs } from './Tabs';
import Companyinfo, { Termsandscondition } from './Details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Btngroup/>
    <Pgination/>
    <Breadcrumps/>
    <Overlays/>
    <Toasts/>
    <Controlledtabs/>
    <Justifiedtabs/>
    <Pilltabs/>
    <Companyinfo/>
    <Termsandscondition/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
