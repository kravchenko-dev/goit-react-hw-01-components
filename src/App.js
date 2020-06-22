// Core
import React from 'react';

// Components
import Profile from './components/SocialProfile/socialProfile';
import StatisticsList from './components/Statistics/statisticsList';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

// Instruments
import statisticalData from './components/Statistics/statistical-data.json';
import user from './components/SocialProfile/user.json';
import friends from './components/FriendList/friends.json';
import items from './components/TransactionHistory/transactions.json';

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsList title="Upload stats" stats={statisticalData} />
      <FriendList items={friends} />
      <TransactionHistory items={items} />
    </div>
  );
};

export default App;
