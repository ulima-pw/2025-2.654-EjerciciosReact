import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TareasPage from './pages/TareasPage'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TareasPage />
  </StrictMode>,
)
