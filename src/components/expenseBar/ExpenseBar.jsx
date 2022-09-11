import React, { useState, useEffect } from 'react';
import ExpenseItem from '../expenseItem/ExpenseItem';

export default function ExpenseBar(props) {
  const rndNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const [expenseItem, setExpenseItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const getValues = (data) => {
    setTotalPrice(totalPrice + data);
  };
  const handleTotal = () => {
    props.getValues(totalPrice);
  };
  useEffect(() => {
    handleTotal();
  }, [getValues]);

  return (
    <>
      <div className="expense-bar">
        <div className="selection-list">
          {/* <select>
            <option value="" selected disabled hidden>
              Select
            </option>
            <option value="1">Food</option>
            <option value="2">Houseware</option>
            <option value="3">Entertainment</option>
          </select> */}
          <div className="select">
            Selected
            <ul>
              <li>Food</li>
              <div className="select-bar"></div>
              <li>Houseware</li>
              <div className="select-bar"></div>
              <li>Entertainment</li>
            </ul>
          </div>
        </div>
        <form>
          <button
            className="button-style"
            onClick={(e) => (
              e.preventDefault(),
              setExpenseItem([
                ...expenseItem,
                <ExpenseItem getValues={getValues} key={rndNum(0, 99999999)} />,
              ])
            )}
          >
            Add expense
          </button>
        </form>
      </div>
      <div className="item-list">
        {expenseItem}
        <div className="total-items">
          <p>Total</p>
          <p>€{totalPrice}</p>
        </div>
      </div>
    </>
  );
}
