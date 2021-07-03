// starting from React 17, it's not necssary to import React to use JSX
import { Component } from 'react' // import destructured Component from react
import './App.css';

// Convert App from functional to class component:
// - this allows more functionality vs. just returning HTML
class App extends Component {
  // - access to the render method
  render() {
    // - which has a return
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
