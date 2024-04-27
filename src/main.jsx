import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import TagManager from 'react-gtm-module';
import ReactGA4 from 'react-ga4';

const tagManagerArgs = {
  gtmId: 'GTM-NBQ7GWGK',
};

const ReactGA4Args = {
  gtmId: 'G-L5VDJ7TZC4',
};

TagManager.initialize(tagManagerArgs);

ReactGA4.initialize(ReactGA4Args.gtmId);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
