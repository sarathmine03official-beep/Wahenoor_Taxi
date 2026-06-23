import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../src/style.css'
import App from './App.tsx'
import '../src/App.css'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';


import { BrowserRouter } from 'react-router-dom'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </StrictMode>,
)
