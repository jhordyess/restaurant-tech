import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'

const root = createRoot(document.getElementById('app') as HTMLElement)

root.render(<App />)
