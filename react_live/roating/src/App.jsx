import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Users from './Users';
import Home from './Home';

const App = () => {
  // console.log(location.pathname);
  return (
    <>
      <BrowserRouter>
        <div className="page">
          <ul className="navigation">
            <li className="navigation__item">
              <Link to="/">Home</Link>
            </li>
            <li className="navigation__item">
              <Link to="/users">Users</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/users" component={Users}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;

// "TypeError: Cannot read property 'textContent' of null\n

/*
<Switch>
  <Route exact path="/">
    <Home />
  </Route>
  <Route path="/products">
    <Products />
  </Route>
</Switch>;
*/
