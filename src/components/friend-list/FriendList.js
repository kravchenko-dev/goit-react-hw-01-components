import React from 'react';
import FriendsListItem from './FriendsListItem';
import './FriendList.css';

const FriendList = ({ items }) => (
  <ul className="friend-list">
    {items.map(friend => (
      <li className="FriendList__avatar" key={friend.id}>
        <FriendsListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      </li>
    ))}
  </ul>
);

export default FriendList;
