import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TareasPage from './pages/TareasPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TareasPage />
  </StrictMode>,
)
