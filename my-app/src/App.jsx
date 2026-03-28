import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Patients from "./pages/Patients";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  // Simple auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);

  return (
    <BrowserRouter>
      {/* Show Sidebar if logged in */}
      {isAuthenticated && <Sidebar />}

      <div className={isAuthenticated ? "ml-64" : ""}>
        {/* Show Navbar if logged in */}
        {isAuthenticated && <Navbar />}

        <div className={isAuthenticated ? "p-6 mt-16" : ""}>
          <Routes>
            {/* Login route */}
            <Route
              path="/login"
              element={
                isAuthenticated ? <Navigate to="/" /> : <Login handleLogin={handleLogin} />
              }
            />

            {/* Dashboard route */}
            <Route
              path="/"
              element={
                isAuthenticated ? <Dashboard /> : <Navigate to="/login" />
              }
            />

            {/* Patients route */}
            <Route
              path="/patients"
              element={
                isAuthenticated ? <Patients /> : <Navigate to="/login" />
              }
            />

            {/* Redirect root "/" to Dashboard */}
            <Route path="/" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />

            {/* Catch-all for unknown URLs */}
            <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;