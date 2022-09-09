import React, { useState } from 'react';
import ExpenseItem from '../expenseItem/ExpenseItem';

export default function ExpenseBar() {
  const rndNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const [expenseItem, setExpenseItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const getValues = (data) => {
    // e.preventDefault();
    // console.log(e);
    setTotalPrice(totalPrice + data);
    console.log(data);
  };

  return (
    <>
      <div className="expense-bar">
        <div className="selection-list">
          <select>
            <option value="" selected disabled hidden>
              Select
            </option>
            <option value="1">Food</option>
            <option value="2">Houseware</option>
            <option value="3">Entertainment</option>
          </select>
        </div>
        <form>
          <button
            onClick={(e) => (
              e.preventDefault(),
              setExpenseItem([
                ...expenseItem,
                <ExpenseItem getValues={getValues} key={rndNum(0, 99999999)} />,
              ])
            )}
            className="button-style"
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
