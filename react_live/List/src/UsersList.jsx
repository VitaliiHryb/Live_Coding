import React from 'react';
import Pagination from './Pagination';
import User from './User';

// refactoring
class UsersList extends React.Component {
  state = {
    currentPage: 0,
    itemsPerPage: 3,
  };

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  render() {
    const { currentPage, itemsPerPage } = this.state;
    const users = this.props.users;
    let startIndex = currentPage * itemsPerPage;

    return (
      <div>
        <Pagination
          totalItems={users.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage + 1}
          goPrev={this.goPrev}
          goNext={this.goNext}
        />
        <ul className="users">
          {users.slice(startIndex, itemsPerPage + startIndex).map(({ id, ...user }) => (
            <User key={id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

// LC
// state:
// currentPage: 0,
// itemsPerPage: 3,

// props ==> Pagination
// prevHandler
// nextHandler
// curPage
// usersCount
// usersPerPage

// JENYA
// class UsersList extends React.Component {
//   state = {
//     currentPage: 1,
//     itemsPerPage: 3,
//   };

//   // ця функція не потрібна
//   // sliceUserList = () => {
//   //   const { currentPage, itemsPerPage } = this.state;
//   //   const indexTo = currentPage * itemsPerPage;
//   //   const indexFrom = indexTo - itemsPerPage;
//   //   const { users } = this.props.users;
//   //   return users.slice(indexFrom, indexTo);
//   // };

//   handlerPrevPage = () => {
//     this.setState({ currentPage: this.state.currentPage - 1 });
//   };

//   handlerNextPage = () => {
//     this.setState({ currentPage: this.state.currentPage + 1 });
//   };

//   render() {
//     const { currentPage, itemsPerPage } = this.state;
//     const indexTo = currentPage * itemsPerPage;
//     const { users } = this.props;
//     const usersList = users.slice(indexTo - itemsPerPage, indexTo);

//     return (
//       <div>
//         <Pagination
//           currentPage={this.state.currentPage}
//           goPrev={this.handlerPrevPage}
//           goNext={this.handlerNextPage}
//           totalItems={users.length}
//           itemsPerPage={this.state.itemsPerPage}
//         />
//         <ul className="users">
//           {usersList.map(({ name, age, id }) => (
//             <User name={name} age={age} key={id} />
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// MY OLD SOLUTION
/*
class UsersList extends React.Component {
  state = {
    currentPage: 0,
    itemsPerPage: 3,
  };

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  render() {
    const { currentPage, itemsPerPage } = this.state;
    let startIndex = currentPage * itemsPerPage;
    const showedUsers = this.props.users
      .slice(startIndex, itemsPerPage + startIndex)
      .map(({ id, ...user }) => (
        <li className="user" key={id}>
          <User {...user} />
        </li>
      ));

    return (
      <div>
        <Pagination
          totalItems={this.props.users.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage + 1}
          goPrev={this.goPrev}
          goNext={this.goNext}
        />
        <ul className="users">{showedUsers}</ul>
      </div>
    );
  }
}
*/

export default UsersList;

// Algo
// 0. разбить разметку на компоненты(пока без логики)
// 1. отрисовать список методом map
// добавляем логику
// 2. functional Component ==> class Component
// 3. methods + state
// 3.1 goPrev ==> currentPage - 1
// 3.2 goNext ==> currentPage + 1
// 4. use slice() for pagination

// 1.
/*
const UsersList = props => {
  const usersArray = props.users;

  const userData = usersArray.map(user => (
    <li className="user" key={user.id}>
      <User {...user} />
    </li>
  ));

  return (
    <div>
      <div className="pagination">
        <button className="btn">←</button>
        <span className="pagination__page">1</span>
        <button className="btn">→</button>
      </div>

      <ul className="users">{userData}</ul>
    </div>
  );
};
*/
