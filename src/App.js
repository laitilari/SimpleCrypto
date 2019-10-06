import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { btcEur: [] };
  }

  async componentDidMount() {
    try {
      const response = await fetch(`https://api.coindesk.com/v1/bpi/currentprice/EUR`);
      const json = await response.json();
      const btcEur = json.bpi.EUR.rate.slice(0, -5) + ' €'
      this.setState({ btcEur: btcEur });
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="app">
        BTC = {this.state.btcEur}
      </div>
    );
  }
}

export default App;
