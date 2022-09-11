import React, { useState, useEffect } from 'react';

const ExpenseItem = (props) => {
  const [getValue, setGetValue] = useState(0);
  const value = (e) => {
    setGetValue(parseFloat(e.target.value));
  };

  useEffect(() => {
    const handleChange = () => {
      props.getValues(getValue);
    };
    handleChange();
  }, [getValue, value]);

  return (
    <div>
      <form>
        <input type="text" placeholder="Example item" />
        <input
          type="number"
          step={'0.01'}
          placeholder="€0.00"
          value={getValue}
          onChange={value}
        />
      </form>
      <div className="bottom-bar"></div>
    </div>
  );
};

export default ExpenseItem;
