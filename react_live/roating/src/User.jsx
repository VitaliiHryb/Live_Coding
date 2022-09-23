import React from 'react';

const User = props => {
  // console.log(props.location.pathname);

  return (
    <div className="user">
      <img
        alt="User Avatar"
        src="https://avatars.githubusercontent.com/u/9919?v="
        className="user__avatar"
      />
      <div className="user__info">
        <span className="user__name">Github</span>
        <span className="user__location">USA</span>
      </div>
    </div>
  );
};

export default User;

// "TypeError: Cannot read property 'textContent' of null\n

// hope it is it
// {`product is a ${match.params.productId}`}

/*
const Product = ({ match }) => {
  return (
    <div className="page__content">
      {`Product is a ${match.params.productId}`}
    </div>
  );
};
*/

// with Hooks
/*
const Product = () => {
  const { productId } = useParams();
  return <div className="page__content">{`Product is a ${productId}`}</div>;
};
*/
