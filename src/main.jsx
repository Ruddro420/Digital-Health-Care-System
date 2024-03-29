import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router.jsx';
import AuthProvider from './context/AuthContext.jsx';
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} >
        <Toaster>
          <App />
        </Toaster>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
