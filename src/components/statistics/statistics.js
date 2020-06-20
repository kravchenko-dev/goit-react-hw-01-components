import React from 'react';

const statistics = (label, percentage, id) => {
  return (
    <li class="item" key={id}>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
  );
};

export default statistics;
