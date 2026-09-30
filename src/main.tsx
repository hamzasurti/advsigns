import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Review switch: ?palette=name sticks for the tab so the whole site can be
// clicked through in one colourway. Remove once a palette is chosen.
const wanted = new URLSearchParams(location.search).get('palette')
if (wanted !== null) sessionStorage.setItem('palette', wanted)
const palette = sessionStorage.getItem('palette')
if (palette) document.documentElement.dataset.palette = palette

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
