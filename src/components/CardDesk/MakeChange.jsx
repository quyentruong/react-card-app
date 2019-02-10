import React, { Component } from 'react';
import $ from 'jquery';
import { FaFileCode } from 'react-icons/fa';
import logo from '../../images/coins.png';

class MakeChange extends Component {
  constructor(props) {
    super(props);
    this.moneyRef = React.createRef();
  }

  handleClick = () => {
    const output = $('#result');
    const money = this.moneyRef.current.value;
    const regex = /^[1-9]\d*$|^\d*\.\d+$/;

    if (!regex.test(money)) {
      output.html(`${money} is not a number or not a positive number.`);
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
      <div className="text-center">
        <a rel="noopener noreferrer" target="_blank" href="https://jsfiddle.net/SMagic/r3Lxd9w5/">
          <i>
            <FaFileCode /> Source Code
          </i>
        </a>
        <h3 className="display-4">Make Change</h3>
        <div className="form-group">
          <label htmlFor="money">
            Amount of money <img src={logo} alt="coin" />
            <input
              id="money"
              className="form-control"
              type="text"
              ref={this.moneyRef}
              placeholder="Enter a decimal number"
              defaultValue="4.17"
            />
          </label>
        </div>
        <button type="button" className="btn btn-success" onClick={this.handleClick}>
          Convert
        </button>
        <br />
        <br />
        <div id="result" className="display-6 alert-success box" />
      </div>
    );
  }
}

export default MakeChange;
