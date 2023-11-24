import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './context/AppProvider.jsx'
import App from './App.jsx'
import './assets/css/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AppProvider> 
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AppProvider>
	</React.StrictMode>,
)
