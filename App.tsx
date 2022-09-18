import React from 'react';

const Get = () => {
  return (
    <div>
      <h2>Welcome man !!</h2>
      <p>I really appreciate your work !!</p>
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <h1>Hello React.</h1>
      <Get />
    </div>
  );
}
export { App, Get };
