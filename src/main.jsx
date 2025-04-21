import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom' // Import HashRouter

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter> {/* Replace BrowserRouter with HashRouter */}
        <App />
    </HashRouter>
)
