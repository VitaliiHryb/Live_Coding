import React from 'react';

// size (number)
const Spinner = props => {
  const { size } = props;
  // console.log(props);
  let style = {
    width: `${size}px`,
    height: `${size}px`,
  };

  return <span className="spinner" style={style}></span>;
};

export default Spinner;

// REACT APPROCH
// 0. make a layout
// 1. divite inte components
// 3.

/*
<!-- Spinner.jsx -->
<span class="spinner"></span>

<!-- Login.jsx -->
<button class="login btn">Login</button>

<!-- Logout.jsx -->
<button class="logout btn">Logout</button>
*/
