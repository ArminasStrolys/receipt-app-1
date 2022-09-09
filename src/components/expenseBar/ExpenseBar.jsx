import React, { useState } from 'react';
import ExpenseItem from '../expenseItem/ExpenseItem';

export default function ExpenseBar() {
  const [expenseItem, setExpenseItem] = useState([]);

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
              setExpenseItem([...expenseItem, <ExpenseItem />])
            )}
            className="button-style"
          >
            Add expense
          </button>
        </form>
      </div>
      <div className="item-list">
        {expenseItem}
        {/* <form>
          <input type="text" placeholder="Example item" />
          <input type="text" placeholder="€0.00" />
        </form> */}
        <div className="total-items">
          <p>Total</p>
          <p>€0.00</p>
        </div>
      </div>
    </>
  );
}
