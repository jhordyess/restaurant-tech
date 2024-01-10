import * as React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'

createRoot(document.getElementById('app') as HTMLElement).render(<App />)
