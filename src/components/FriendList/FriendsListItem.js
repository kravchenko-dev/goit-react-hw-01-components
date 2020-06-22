import React from 'react';
import './FriendList.css';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  const status = isOnline ? 'status-Online' : 'status-Offline';
  return (
    <>
      <span className={status}></span>
      <img
        className="FriendsListItem__avatar"
        src={avatar}
        alt={name}
        width="48"
      />
      <p className="FriendsListItem__name">{name}</p>
    </>
  );
};

export default FriendsListItem;
