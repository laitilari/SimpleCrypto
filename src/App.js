import React, { Component } from "react";
import './App.css';
import * as Round from '../node_modules/round-to'

class App extends Component {
  constructor() {
    super();
    this.state = { btcEur: '', fsnEur: '' };
  }

  async componentDidMount() {
    try {
      const response = await fetch(`https://api.coindesk.com/v1/bpi/currentprice/EUR`);
      const json = await response.json();
      const btcEur = json.bpi.EUR.rate + ' €';
      this.setState({ btcEur: btcEur });
    } catch (error) {
      alert(error)
    }

    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=fsn&vs_currencies=eur`);
      // console.log(await response.text()) 
      const text = await response.text();
      const json = JSON.parse(text);
      const fsnEur = Round(json.fsn.eur, 2) + ' €'
      this.setState({ fsnEur: fsnEur });
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="app">
        BTC = {this.state.btcEur} <br></br>
        FSN = {this.state.fsnEur}
      </div>
    );
  }
}

export default App;
