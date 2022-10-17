import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import User from './User';
import Home from './Home';

// SPA
// how does routing works
// examples with code
// routing libs & versions

function Users(props) {
  // console.log(location); // обєкт, який відповідає за усе повязане з url
  // console.log(props);

  // query params

  // option 1
  new URLSearchParams(props.location.search).forEach(param => console.log(param));

  // option 2
  // qs

  // option 3
  // hooks

  return (
    <>
      <div className="page__content">
        <h1>Users</h1>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/users/github">Github</Link>
          </li>
          <li className="navigation__item">
            <Link to="/users/facebook">Facebook</Link>
          </li>
          <li className="navigation__item">
            <Link to="/users/ArDezZz">Vlad</Link>
          </li>
          <li className="navigation__item">
            <Link to="/users/yariki23">Yaroslav</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/users">
            <span>Select a user please</span>
          </Route>
          <Route exact path="/" component={Home}></Route>
          <Route path="/users/:userId" component={User}></Route>
        </Switch>
      </div>
    </>
  );
}

export default Users;

// "TypeError: Cannot read property 'textContent' of null\n

// <Route path={`${match.url}/:productId`} component={Product} />

// with Hooks
/*
<Route path={`${match.url}/:productId`}>
          <Product />
        </Route>
*/
