import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ShapeContent from './ShapeContent';

class Shape extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isClick: false,
    };
    this.inputRef = React.createRef();
  }

  checkNumber = number => {
    const regex = /^[1-9]\d*$|^\d*\.\d+$/;
    return regex.test(number);
  };

  fibonnaci = value => {
    const fib = [0, 1];
    let i = 2;
    while (fib[i - 1] + fib[i - 2] <= value) {
      fib[i] = fib[i - 2] + fib[i - 1];
      i += 1;
    }
    return fib;
  };

  handleClick = shape => {
    const { value } = this.inputRef.current;
    const values = value.split(',');
    const { length } = values;
    const first = values[0].trim();
    const second = values[1] === undefined ? 1 : values[1].trim();

    let result = -1;
    if (this.checkNumber(first) && this.checkNumber(second)) {
      if (length === 1) {
        if (shape === 'square') {
          result = Math.round(first * first * 100) / 100;
        } else if (shape === 'cube') {
          result = Math.round(first * first * first * 100) / 100;
        } else if (shape === 'cCircle') {
          result = Math.round(first * Math.PI * 100) / 100;
        } else if (shape === 'aCircle') {
          result = Math.round(first * first * Math.PI * 100) / 100;
        } else if (shape === 'fib') {
          result = this.fibonnaci(first).join(', ');
        }
      } else if (length === 2) {
        if (shape === 'aRect') {
          result = Math.round(first * second * 100) / 100;
        }
      }
    }
    this.inputRef.current.value = '';

    this.setState({
      isClick: true,
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
    const { shape } = this.props;
    const shapeContent = ShapeContent[shape];
    return (
      <div>
        <h4>{shapeContent.name}</h4>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor={shape}>
            {shapeContent.label}
          </label>
          <div className="col-sm-3">
            <input
              className="form-control"
              type="text"
              id={shape}
              ref={this.inputRef}
              placeholder={'Enter ' + shapeContent.label}
            />
          </div>
          <br />
          <br />
          <div className="col-sm-auto">
            <button
              className="form-control btn btn-primary"
              type="button"
              onClick={() => this.handleClick(shape)}
            >
              {shapeContent.button}
            </button>
          </div>
        </div>

        {this.showResult()}
        <br />
      </div>
    );
  }
}

Shape.propTypes = {
  shape: PropTypes.string,
};

export default Shape;
