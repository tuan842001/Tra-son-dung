import React from 'react';
import ReactDOM from 'react-dom';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import App from './App';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

function App() {
  const { t } = useTranslation();

  return <h2>{t('Welcome to React')}</h2>;
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
