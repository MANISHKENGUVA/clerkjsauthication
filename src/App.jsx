import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { SignIn, SignUp, SignedIn, SignedOut } from "@clerk/clerk-react";
import Dashboard from "./Pages/Dashboard";

// This component redirects signed-in users to the dashboard, otherwise shows SignIn
function SignInRedirect() {
  return (
    <>
      <SignedIn>
        {/* If the user is signed in, redirect to /dashboard */}
        <Navigate to="/dashboard" />
      </SignedIn>
      <SignedOut>
        {/* If the user is not signed in, show SignIn */}
        <SignIn />
      </SignedOut>
    </>
  );
}

// This component redirects signed-in users to the dashboard, otherwise shows SignUp
function SignUpRedirect() {
  return (
    <>
      <SignedIn>
        {/* If the user is signed in, redirect to /dashboard */}
        <Navigate to="/dashboard" />
      </SignedIn>
      <SignedOut>
        {/* If the user is not signed in, show SignUp */}
        <SignUp />
      </SignedOut>
    </>
  );
}

// Dashboard page (this should be a protected route)


function App() {
  return (
    <Router>
      <Routes>
        {/* Routes for SignIn, SignUp, and Register */}
        <Route path="/" element={<SignInRedirect />} />
        <Route path="/signup" element={<SignUpRedirect />} />
        <Route path="/register" element={<SignUpRedirect />} />
        
        {/* Protected route for Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
