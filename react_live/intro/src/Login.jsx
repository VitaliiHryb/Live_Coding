import React from 'react';

// input: obj
// output: jsx

// click handler (function)
const Login = props => {
  // console.log(props);
  return (
    <button className="login btn" onClick={props.onLogin}>
      Login
    </button>
  );
};

export default Login;

/*
<!-- Spinner.jsx -->
<span class="spinner"></span>

<!-- Login.jsx -->
<button class="login btn">Login</button>

<!-- Logout.jsx -->
<button class="logout btn">Logout</button>
*/
