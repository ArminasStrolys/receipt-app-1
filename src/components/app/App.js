import React from 'react';
import MainBar from '../mainBar/MainBar';

function App() {
  return (
    <div>
      <div className="container">
        <MainBar />
      </div>
      <div className="second-container">
        {/* <div className="bottom-bar">
          <div className="total">
            <p>
              Total: <span>€0</span>
            </p>
          </div>
          <div>
            <form>
              <button
                onClick={(e) => e.preventDefault()}
                className="button-style"
                type="submit"
              >
                Add receipt
              </button>
            </form>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
