import React, { Component } from "react";
import './App.scss';
import * as Round from '../node_modules/round-to'
// import bitcoin from '../public/bitcoin'

class App extends Component {
  constructor() {
    super();
    this.state = { btcEur: '', fsnEur: '' };
  }

  async componentDidMount() {
    try {
      const response = await fetch(`https://api.coindesk.com/v1/bpi/currentprice/EUR`);
      const json = await response.json();
      const btcEur = Round(Number(json.bpi.EUR.rate.split(',').join('')), 2) + ' €';
      this.setState({ btcEur: btcEur });
    } catch (error) {
      console.log(error)
    }

    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=fsn&vs_currencies=eur`);
      const text = await response.text();
      const json = JSON.parse(text);
      const fsnEur = Round(json.fsn.eur, 2) + ' €'
      this.setState({ fsnEur: fsnEur });
    } catch (error) {
      console.log(error)
    }

    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=hedera-hashgraph&vs_currencies=eur`);
      const text = await response.text();
      const json = JSON.parse(text);
      const hbarEur = Round(json["hedera-hashgraph"].eur, 4) + ' €'
      this.setState({ hbarEur: hbarEur });
    } catch (error) {
      console.log(error)
    }
  }

  async getGoinsList() {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/list`);
    const text = await response.text();
    const json = JSON.parse(text);
    console.log(json)
    return json
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <div>
            <img className="fear-greed" src="https://alternative.me/crypto/fear-and-greed-index.png" alt="Latest Crypto Fear & Greed Index" />  
          </div>
          <div>
            <img className="btc-logo"
              src={require("./images/btc.svg")}
              alt="bitcoin logo"
            />
            <CryptoPrice crypto={this.state.btcEur} />
          </div>
          <div>
            <img className="fsn-logo"
              src={require("./images/fsn.png")}
              alt="fsn logo"
            />
            <CryptoPrice crypto={this.state.fsnEur} />
          </div>
          <div>
            <img className="hbar-logo"
              src={require("./images/hbar.jpg")}
              alt="hbar logo"
            />
            <CryptoPrice crypto={this.state.hbarEur} />
          </div>
        </div>
      </div>
    );
  }
}

const CryptoPrice = (props) => {
  const { crypto } = props;
  return (
    <div>{crypto}</div>
  )
}

export default App;
