import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* use of React Router for mount home and video pages on app component */}
    <BrowserRouter><App /></BrowserRouter>
  </React.StrictMode>,
)
