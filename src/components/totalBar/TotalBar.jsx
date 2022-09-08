import React from 'react';

export default function TotalBar() {
  return (
    <div className="total-bar">
      <div className="total">
        <span>Total: €0.00</span>
      </div>
      <div className="add-receipt">
        <button>Add receipt</button>
      </div>
    </div>
  );
}
