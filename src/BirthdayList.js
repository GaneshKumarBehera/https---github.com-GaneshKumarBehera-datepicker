import React from 'react';
import './BirthdayList.css';

const BirthdayList = ({ birthdays }) => {
  return (
    <div className="birthday-list">
      <h2>Favourite Birthdays</h2>
      <ul>
        {birthdays.map((birthday, index) => (
          <li key={index}>
            {birthday.name} - {new Date(birthday.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BirthdayList;