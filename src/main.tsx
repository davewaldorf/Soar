import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Settings from './pages/Settings';
import Dashboard from './pages/Dashboard';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  </StrictMode>,
)
