import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Front from './front.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Front/>
  </StrictMode>,
)
