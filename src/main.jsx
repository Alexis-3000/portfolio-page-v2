import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalContextProvider from "./contexts/GlobalContext.jsx"
import { BrowserRouter } from "react-router-dom"
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalContextProvider>
  </React.StrictMode>,
)
