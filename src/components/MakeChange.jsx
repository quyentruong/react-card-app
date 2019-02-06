import React, { Component } from 'react';
import $ from 'jquery';
import logo from '../images/coins.png';

class MakeChange extends Component {
  constructor(props) {
    super(props);
    this.moneyRef = React.createRef();
  }

  handleClick = () => {
    const output = $('#result');
    const money = this.moneyRef.current.value;
    const regex = /^-?\d*\.?\d+$/;

    if (!regex.test(money)) {
      output.html(`${money} is not a number.`);
      return;
    }
    if (money <= 0) {
      output.html(`${money} is not a positive number.`);
      return;
    }

    const coin = Object.freeze({
      QUARTER: 25,
      DIME: 10,
      NICKEL: 5,
      PENNIE: 1,
    });

    let remainder = Math.round(100 * money);
    let result = '';
    for (let i = 0; i < Object.keys(coin).length; i += 1) {
      const temp = Object.keys(coin)[i];
      const quotient = Math.floor(remainder / coin[temp]);
      if (quotient !== 0) result += `${temp}: ${quotient}</br>`;
      remainder %= coin[temp];
      if (remainder === 0) break;
    }
    output.html(result);
  };

  render() {
    return (
      <div>
        <div className="col-sm-6 offset-sm-3 text-center">
          <h3 className="display-4">Make Change</h3>
          <div className="form-group">
            <label>
              Amount of money <img src={logo} alt="coin" />
            </label>
            <input className="form-control" type="text" ref={this.moneyRef} placeholder="456.17" />
          </div>
          <button type="button" className="btn btn-success" onClick={this.handleClick}>
            Convert
          </button>
          <br />
          <br />
          <div id="result" className="display-6 alert-success box" />
        </div>
      </div>
    );
  }
}

export default MakeChange;
