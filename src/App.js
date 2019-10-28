import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Quote from "./Quote";
import Quotes from "./Quotes";
import Lamp from "./Lamp";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            working: false
        };
    }
    handleClick = () => {
        this.setState({ working: !this.state.working });
        console.log(`Button clicked`);
    };
  render() {
    return (

        <div className="App">
          <header className="App-header">
              <img src={logo} className={this.state.working? "App-logo-start" : "App-logo"} alt="logo" />

              <button onClick={this.handleClick} >
                  <h1>Push-Me</h1>
              </button>
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
            <h1 className="App-title">Simpsons Quotes</h1>
          </header>
          <Quote
              quote="I believe the children are the future... Unless we stop them now!"
              character="Homer Simpson"
              image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
          />
          <Quote
              quote="Me fail English? That's unpossible"
              character="Ralph Wiggum"
              image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
          />

          <Quotes/>
            <Lamp on />
            <Lamp />
        </div>

    );
  }
}

export default App;
