import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PeliculaContexto } from './contexto/PeliculaContexto.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PeliculaContexto>
      <App />
    </PeliculaContexto>
  </StrictMode>,
)
