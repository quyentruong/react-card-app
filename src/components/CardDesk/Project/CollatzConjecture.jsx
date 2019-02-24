import React, { Component } from 'react';
import { FaFileCode } from 'react-icons/fa';
import $ from 'jquery';

class CollatzConjecture extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleClick = () => {
    const input = this.inputRef.current.value;
    const output = $('#result');
    const regex = /^[1-9]\d*$/;

    if (!regex.test(input) || input > 989345275647) {
      output.html(
        `${input} is not a number or not a positive number or not a integer number or pass the limit.`
      );
      return;
    }

    const collatzNext = number => {
      if (number % 2 === 0) return number / 2;
      return number * 3 + 1;
    };

    const collatzSequence = number => {
      let result = '';
      let count = 1;
      let a = number;
      while (a !== 1) {
        result += `${a} -> `;
        a = collatzNext(a);
        count += 1;
      }
      return [result + '1', count];
    };
    const result = collatzSequence(input);
    output.html(`Length: ${result[1]}<br/> Sequence: ${result[0]}`);
  };

  render() {
    return (
      <div className="text-center">
        <a rel="noopener noreferrer" target="_blank" href="https://jsfiddle.net/SMagic/2nbgv15y/">
          <i>
            <FaFileCode /> Source Code
          </i>
        </a>

        <h3 className="display-4">Collatz Conjecture</h3>
        <div className="form-group">
          <label htmlFor="money">
            Number to start sequence
            <input
              id="money"
              className="form-control"
              type="number"
              ref={this.inputRef}
              placeholder="Enter a number"
              defaultValue="5"
            />
          </label>
        </div>
        <button type="button" className="btn btn-success" onClick={this.handleClick}>
          Run
        </button>
        <br />
        <br />
        <div id="result" className="display-6 box text-left" />
      </div>
    );
  }
}

export default CollatzConjecture;
