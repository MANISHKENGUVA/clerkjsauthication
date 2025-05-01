import React from 'react';
import { useClerk } from '@clerk/clerk-react';
import { useUser } from '@clerk/clerk-react';


function Dashboard() {
  const { signOut } = useClerk();
  const { user } = useUser();


  const handleSignOut = () => {
    signOut(); // This will sign the user out and redirect to afterSignOutUrl ("/" by default)
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Welcome to the Dashboard!</h2>
      <button onClick={handleSignOut} style={{ padding: '10px 20px', marginTop: '20px' }}>
        Sign Out
      </button>
      <h2>Welcome to the Dashboard!</h2>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.fullName}</p>
          <p><strong>Email:</strong> {user.primaryEmailAddress?.emailAddress}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default Dashboard;
