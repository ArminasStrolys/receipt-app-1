import React, { useState, useEffect } from 'react';

const ExpenseItem = (props) => {
  const [getValue, setGetValue] = useState(0);
  const value = (e) => {
    setGetValue(parseFloat(e.target.value));
  };
  const handleChange = () => {
    props.getValues(getValue);
  };
  useEffect(() => {
    handleChange();
  }, [getValue]);

  return (
    <div>
      <form>
        <input type="text" placeholder="Example item" />
        <input
          type="text"
          placeholder="€0.00"
          value={getValue}
          onChange={value}
        />
      </form>
    </div>
  );
};

export default ExpenseItem;
