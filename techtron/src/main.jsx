import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToastProvider from './components/ToastProvider.jsx'
import { AuthProvider } from './auth/authContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* wrapping with ToastProvider */}
    <ToastProvider>
      <AuthProvider>
      <App />
      </AuthProvider>
    </ToastProvider>
  </StrictMode>,
)
