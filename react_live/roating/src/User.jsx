import React from 'react';
import { useState, useEffect, useParams } from 'react';

const User = props => {
  // console.log(props.location.pathname);
  const userId = props.match.params.userId;
  // const { userId } = useParams(); // is is the same as const userId = props.match.params.userId;

  const [userData, setUserData] = useState(null);

  // useState
  // input: any data type
  // out:  array of two entries

  // state
  // userName
  // userAvatar
  // userLocation

  // http request

  // useEffect
  // input: callback, array;
  // output: undefined;

  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(res => {
        // console.log('res', res);
        const { name, avatar_url, location } = res;
        setUserData({
          userName: name,
          userAvatar: avatar_url,
          userLocation: location,
        });
      });
  }, [userId]);

  if (!userData) {
    return null;
  }

  const { userName, userAvatar, userLocation } = userData;

  return (
    <div className="user">
      <img
        alt="User Avatar"
        // src="https://avatars.githubusercontent.com/u/9919?v="
        src={userAvatar}
        className="user__avatar"
      />
      <div className="user__info">
        <span className="user__name">{userName}</span>
        <span className="user__location">{userLocation}</span>
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
