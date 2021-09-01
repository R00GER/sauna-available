import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import commonFI from './translations/fi/Common.json';
import commonEN from './translations/en/Common.json';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'fi',
  resources: {
    en: {
      Common: commonEN,
    },
    fi: {
      Common: commonFI,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
