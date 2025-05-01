import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { SignIn, SignUp, SignedIn, SignedOut } from "@clerk/clerk-react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInRedirect />} />
        <Route path="/signup" element={<SignUpRedirect />} />
        <Route path="/register" element={<SignUpRedirect />} />
      </Routes>
    </Router>
  );
}

// Redirect signed-in users to the dashboard or another route
function SignInRedirect() {
  return (
    <>
      <SignedIn>
        <Navigate to="/dashboard" />
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </>
  );
}

// Redirect signed-in users away from the signup page
function SignUpRedirect() {
  return (
    <>
      <SignedIn>
        <Navigate to="/dashboard" />
      </SignedIn>
      <SignedOut>
        <SignUp />
      </SignedOut>
    </>
  );
}

export default App;
