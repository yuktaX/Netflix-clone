import React from "react";
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import Navbar from "./components/Navbar";
import NavbarSignUp from "./components/NavbarSignUp";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <main>
      <AuthContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <NavbarSignUp />
                <Landing />
              </div>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <div>
                  <Navbar />
                  <Landing />
                </div>
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </main>
  );
}
