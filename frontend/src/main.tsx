import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource/inter/index.css"
import "@fontsource/montserrat/index.css"
import "@fontsource/public-sans/index.css"
import "@fontsource/outfit/index.css"
import "@fontsource/jetbrains-mono/index.css"
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
