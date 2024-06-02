import React, { useState } from 'react';
import './AddBirthday.css';

const AddBirthday = ({ addBirthday }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBirthday({ name, date });
    setName('');
    setDate('');
  };

  return (
    <div className="add-birthday">
      <h2>Add Birthday</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddBirthday;