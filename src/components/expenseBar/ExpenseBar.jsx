import React, { useState, useEffect } from 'react';
import ExpenseItem from '../expenseItem/ExpenseItem';

export default function ExpenseBar(props) {
  const rndNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const [expenseItem, setExpenseItem] = useState([]);
  const [select, setSelect] = useState('Select');
  const [display, setDisplay] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const toggleMenu = () => {
    display === false ? setDisplay(true) : setDisplay(false);
  };
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
          <div onClick={toggleMenu} className="select">
            <span>{select}</span> <span> ❯ </span>
            <ul style={{ display: display === true ? 'block' : 'none' }}>
              <li onClick={() => setSelect('Food')}>Food</li>
              <div className="select-bar"></div>
              <li onClick={() => setSelect('Houseware')}>Houseware</li>
              <div className="select-bar"></div>
              <li onClick={() => setSelect('Entertainment')}>Entertainment</li>
            </ul>
          </div>
        </div>
        <form>
          <button
            className="button-style"
            onClick={(e) => (
              e.preventDefault(),
              setDisplay(false),
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
      <div onClick={() => setDisplay(false)} className="item-list">
        {expenseItem}
        <div className="total-items">
          <p>Total</p>
          <p>€{totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
}
