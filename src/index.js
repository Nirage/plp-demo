import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const renderHandler = (e) => {
  ReactDOM.render(
    <React.StrictMode>
      <App value={e.target.getAttribute('data-value')} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

const btns = document.body.querySelectorAll('[data-value]');
btns.forEach((btn) => btn.addEventListener('click', renderHandler));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
