// starting from React 17, it's not necssary to import React to use JSX
import { Component } from 'react' // import destructured Component from react
import logo from './logo.svg';
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
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
