import React, { useState } from 'react';
import BirthdayList from './BirthdayList';
import AddBirthday from './AddBirthday';
import './App.css';

const App = () => {
  const [birthdays, setBirthdays] = useState([
    { name: 'Anna Apple', date: '1990-05-15' },
    { name: 'Jane Smith', date: '1985-10-30' },
  ]);

  const addBirthday = (birthday) => {
    setBirthdays([...birthdays, birthday]);
  };

  return (
    <div className="App">
      
      <AddBirthday addBirthday={addBirthday} />
      <BirthdayList birthdays={birthdays} />
    </div>
  );
};

export default App;
