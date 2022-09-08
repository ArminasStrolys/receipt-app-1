import React, { useState } from 'react';
import MainBar from '../mainBar/MainBar';
import ExpenseBar from '../expenseBar/ExpenseBar';

function App() {
  const [addReceiptCount, setAddReceiptCount] = useState([]);
  const checkCount = (data) => {
    setAddReceiptCount([...addReceiptCount, data]);
    console.log(addReceiptCount);
  };

  return (
    <div className="main-container">
      <div className="container">
        <MainBar addExpense={checkCount} />
        {addReceiptCount.map((index) => (
          <ExpenseBar key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
