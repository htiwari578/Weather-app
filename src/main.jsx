import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import Weather from './components/weather.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Weather />
  </React.StrictMode>,
)
