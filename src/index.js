import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//as we mentionned the root in index.html is import it's where we nject our app 
// so here we're injecting the <App/> inside it 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <App />  
  </React.StrictMode>
  // </React.StrictMode> for better errors handling if we remove it it works fine
);

