import React from "react";
import "./style/stylesheet.css";

function App() {
  return (
    <div className="App">
      <div className="main-panel">
        <form>
          <input type="text" placeholder="write your message here" />

          <button>Accept</button>
        </form>
        <p className="welcoming-massage">Encode your own message</p>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;

// to do:

// after puting value in input, show button submit
// animate gif above input
// after submiting show lower menu
// ...

// undo the coding section on click
