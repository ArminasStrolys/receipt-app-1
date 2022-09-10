import React, { useState, useEffect } from 'react';

const ExpenseItem = (props) => {
  const [getValue, setGetValue] = useState(0);
  const value = (e) => {
    setGetValue(parseInt(e.target.value));
  };

  useEffect(() => {
    const handleChange = () => {
      props.getValues(getValue);
    };
    handleChange();
  }, [getValue, props]);

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
      <div className="bottom-bar"></div>
    </div>
  );
};

export default ExpenseItem;
