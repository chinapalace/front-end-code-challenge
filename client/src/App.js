import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {}
  async componentDidMount() {
    const res = await fetch('/api/partners/acme/bodies/female');

    let data = await res.json();

    this.setState(data)
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.gender}
        </p>
      </div>
    );
  }
}

export default App;
