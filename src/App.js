// starting from React 17, it's not necssary to import React to use JSX
import { Component } from "react"; // import destructured Component from react
import "./App.css";

// Convert App from functional to class component:
// - this allows more functionality vs. just returning HTML
class App extends Component {
  // - the class component also has a constructor method
  constructor() {
    super();

    // - which gives access to the component's state
    // - also gives access to setState method to modify this.state object
    this.state = {
      string: "Hello, world!",
    };
  }

  // - access to the render method
  render() {
    // - which has a return
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({ string: "Hello, universe!" })}>
            Change text
          </button>
        </header>
      </div>
    );
  }
}

export default App;
