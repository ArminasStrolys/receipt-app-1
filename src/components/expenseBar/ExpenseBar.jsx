import React from 'react';

export default function ExpenseBar() {
  return (
    <div className="expense-bar">
      <div className="selection-list">
        <select>
          {/* <option value="0">Select</option> */}
          <option value="" defaultValue={'selected'} disabled hidden>
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
  );
}
