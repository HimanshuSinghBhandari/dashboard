import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect from home to /jobs */}
        <Route path="/" element={<Navigate to="/jobs" />} />

        {/* Dashboard route */}
        <Route path="/jobs" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
