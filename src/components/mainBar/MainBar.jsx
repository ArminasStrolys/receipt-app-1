import React, { useState } from 'react';

export default function TotalBar(props) {
  const rndNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const receipt_id = rndNum(0, 99999999);

  return (
    <div className="bottom-bar">
      <div className="total">
        <p>
          Total: <span>€0.00</span>
        </p>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault(e);
            props.addExpense(receipt_id);
          }}
        >
          <button className="button-style" type="submit">
            Add receipt
          </button>
        </form>
        {/* shorter approach, but i think it's less formal  
        {/* <button onClick={() => props.addExpense(1)}>Add receipt</button> */}
      </div>
    </div>
  );
}
