import React from 'react';
import './FriendList.css';

const FriendsListItem = ({ avatar, name, isOnline }) => (
  <>
    {isOnline ? (
      <span className="status-Online"></span>
    ) : (
      <span className="status-Offline"></span>
    )}
    <img
      className="FriendsListItem__avatar"
      src={avatar}
      alt={name}
      width="48"
    />
    <p className="FriendsListItem__name">{name}</p>
  </>
);

export default FriendsListItem;
