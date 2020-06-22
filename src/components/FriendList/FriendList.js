import React from 'react';
import FriendsListItem from './FriendsListItem';
import PropTypes from 'prop-types';
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

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
