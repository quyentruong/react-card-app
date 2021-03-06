import React, { Component } from 'react';
import Shape from './ShapeCalculation/Shape';
import ShapeContent from './ShapeCalculation/ShapeContent';

class ShapeCalculation extends Component {
  constructor(props) {
    super(props);
    this.moneyRef = React.createRef();
    this.state = {
      shape: ['square', 'cube', 'cCircle', 'aCircle', 'aRect', 'fib'],
      value: 'square',
      isClick: false,
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value, isClick: false });
  };

  handleSelectFunction = value => {
    const { isClick, result } = value;
    this.setState({
      isClick,
      result,
    });
  };

  showResult = () => {
    const { isClick, result } = this.state;
    if (isClick) {
      return (
        <div>
          <h5>
            <b>Result:</b>
          </h5>
          {result === -1 ? 'Input invalid' : result}
        </div>
      );
    }
    return '';
  };

  render() {
    return (
      <div className="container">
        <h2>Functions</h2>
        <div className="form-group row">
          <div className="col-sm-3">
            <select
              className="custom-select"
              onChange={this.handleChange}
              value={{ ...this.state }.value}
            >
              {{ ...this.state }.shape.map((e, idx) => (
                <option key={String(idx)} value={e}>
                  {ShapeContent[e].name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Shape shape={{ ...this.state }.value} onSelectFunction={this.handleSelectFunction} />
        {this.showResult()}
      </div>
    );
  }
}

export default ShapeCalculation;
