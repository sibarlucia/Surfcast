import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from './Store/Index.js'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import './styles/index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider
        clientId='566763459289-qgqjf20r1lnagvkr2oft2n5p09k96sq0.apps.googleusercontent.com'
    >
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    </GoogleOAuthProvider>,
)
