import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initFacebookSdk } from './fb';

const root = ReactDOM.createRoot(document.getElementById('root'));

initFacebookSdk().then(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});