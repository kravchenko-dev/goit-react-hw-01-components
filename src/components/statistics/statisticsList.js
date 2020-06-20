import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

const statisticsList = ({ title, stats }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}

    <ul className="stat-list">
      {stats.map(stat => (
        <li className="item" key={stat.id}>
          <span className="statisticsList__label">{stat.label}</span>
          <span className="percentage">{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

statisticsList.defaultProps = {
  title: '',
};

statisticsList.propTypes = {
  title: PropTypes.string,
};

export default statisticsList;
