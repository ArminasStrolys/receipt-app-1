import React, { useState } from 'react';
import ExpenseBar from '../expenseBar/ExpenseBar';

export default function TotalBar(props) {
  const rndNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const [total, setTotal] = useState(0);
  const [expenseTab, setExpenseTab] = useState([]);
  const getValues = (data) => {
    setTotal(total + data);
    console.log(total);
  };

  return (
    <>
      {expenseTab}
      <div className="bottom-bar">
        <div className="total">
          <p>
            Total: <span>€{total}</span>
          </p>
        </div>
        <div>
          <form
            onSubmit={(e) => (
              e.preventDefault(),
              setExpenseTab([
                ...expenseTab,
                <ExpenseBar getValues={getValues} key={rndNum(0, 99999999)} />,
              ])
            )}
          >
            <button className="button-style" type="submit">
              Add receipt
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
