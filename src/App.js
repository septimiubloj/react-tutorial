import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [
        {
          id: "1",
          name: "John",
        },
        {
          id: "2",
          name: "Adam",
        },
        {
          id: "3",
          name: "Chris",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.users.map(user => (
          <h1 key={user.id}>{user.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
