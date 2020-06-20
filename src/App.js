import React from 'react';

// Задание №3
import Profile from './components/social-profile/socialProfile';
import user from './components/social-profile/user.json';

// Задание №2
import StatisticsList from './components/statistics/statisticsList';
import statisticalData from './components/statistics/statistical-data.json';

// Задание №3
import FriendList from './components/friend-list/FriendList';
import friends from './components/friend-list/friends.json';

// Задача №4
import TransactionHistory from './components/transaction-history/TransactionHistory';
import items from './components/transaction-history/transactions.json';

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
