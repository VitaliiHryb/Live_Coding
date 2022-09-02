import React from 'react';

// // click handler (function)
const Logout = ({ onLogout }) => {
  return (
    <button className="logout btn" onClick={onLogout}>
      Logout
    </button>
  );
};

export default Logout;

/*
<!-- Spinner.jsx -->
<span class="spinner"></span>

<!-- Login.jsx -->
<button class="login btn">Login</button>

<!-- Logout.jsx -->
<button class="logout btn">Logout</button>
*/
