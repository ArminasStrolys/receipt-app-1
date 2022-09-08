import React from 'react';

export default function ExpenseBar() {
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
          <button className="button-style">Add expense</button>
        </form>
      </div>
      <div className="item-list">
        <form>
          <input type="text" placeholder="Example item" />
          <input type="text" placeholder="€0.00" />
        </form>
        <div className="total-items">
          <p>Total</p>
          <p>€0.00</p>
        </div>
      </div>
    </>
  );
}
