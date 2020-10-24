import React, { Component } from "react";
import "./App.scss";
import * as Round from "../node_modules/round-to";

class App extends Component {
  constructor() {
    super();
    this.state = { btcUSD: "" };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        `https://api.coindesk.com/v1/bpi/currentprice/USD`
      );
      const json = await response.json();
      const btcUSD =
        Round(Number(json.bpi.USD.rate.split(",").join("")), 2) + " $";
      this.setState({ btcUSD: btcUSD });
    } catch (error) {
      console.log(error);
    }
  }

  async getGoinsList() {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/list`);
    const text = await response.text();
    const json = JSON.parse(text);
    return json;
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <div>
            <img
              className="btc-logo"
              src={require("./images/btc.svg")}
              alt="bitcoin logo"
            />
            <CryptoPrice crypto={this.state.btcUSD} />
          </div>
        </div>
      </div>
    );
  }
}

const CryptoPrice = (props) => {
  const { crypto } = props;
  return <div>{crypto}</div>;
};

export default App;
