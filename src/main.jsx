import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ErrorPage from './error-page';
import { HashRouter as Router } from 'react-router-dom';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router >
      <App />
    </Router>
  </React.StrictMode>,
)
