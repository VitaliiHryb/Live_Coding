import React from 'react';

// // click handler (function)
const Logout = props => {
  // console.log(props);
  return (
    <button className="logout btn" onClick={props.onLogin}>
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
