import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';
// the task
// https://gromcode.com/courses/react/tasks/3040?video_id=1

// What is state
// 1. data that are changing
// 2. re-render data

// Algo
// 1. show Login by default ++
// 2. after Login click - show Spinner for 2 seconds ++
// 3. hide Spinner, show Logout ++
// 4. after Logout click - show Login ++

// BAD ==> GOOD
class Auth extends React.Component {
  state = {
    isLoggedIn: false,
    isSpinner: false,
  };

  // input: obj
  // output: undefined

  login = () => {
    this.setState({
      isSpinner: true,
    });

    setTimeout(() => {
      this.setState({
        isSpinner: false,
        isLoggedIn: true,
      });
    }, 2000);
  };

  logout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const { isLoggedIn, isSpinner } = this.state;

    if (isSpinner) {
      return <Spinner size={50} />;
    }

    if (isLoggedIn) {
      return <Logout onLogout={this.logout} />;
    }

    return <Login onLogin={this.login} />;
  }
}

export default Auth;

// REACT APPROCH
// 0. make a layout (was in task)
// 1. divite inte components (was in task)
// 2. build static version in React
// 3. witch props vs witch state
// 3.1. were state shoud live
// 4. implement logic (80% - js, 20% - react)

/*
<!-- Spinner.jsx -->
<span class="spinner"></span>

<!-- Login.jsx -->
<button class="login btn">Login</button>

<!-- Logout.jsx -->
<button class="logout btn">Logout</button>
*/
