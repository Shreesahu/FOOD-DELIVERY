import React from 'react';

const UserCard = ({user}) => {
  return (
    <div>
      <img src={user.avatar_url} alt="User Avatar" key={user.id} />
      <h1>name= {user.name}</h1>
      <h2>location= {user.location}</h2>
      <h3>twitter_username= {user.twitter_username}</h3>
    </div>
  );
};

export default UserCard;