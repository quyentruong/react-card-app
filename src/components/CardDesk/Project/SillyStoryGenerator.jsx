import React, { Component } from 'react';
import '../../../static/style/SillyStoreGenerator.css';

class SillyStoryGenerator extends Component {
  constructor(props) {
    super(props);
    this.customNameRef = React.createRef();
    this.state = {
      isShowStory: false,
      insertx: '',
      inserty: '',
      insertz: '',
      temperatureString: '',
      weightString: '',
      customName: '',
    };
  }

  temperature(check) {
    const temperature = 94;
    const weight = 300;
    const temperatureString =
      check === 'us'
        ? `${temperature} fahrenheit`
        : `${Math.round(((temperature - 32) * 5) / 9)} centigrade`;
    const weightString = check === 'us' ? `${weight} pounds` : `${Math.round(weight / 14)} stones`;
    this.setState({
      temperatureString,
      weightString,
    });
  }

  handleGenerate = () => {
    function randomValueFromArray(array) {
      return array[Math.floor(Math.random() * array.length)];
    }

    if ({ ...this.state }.temperatureString === '') this.temperature('us');

    const customName =
      this.customNameRef.current.value === '' ? 'Bob' : this.customNameRef.current.value;

    const insertx = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
    const inserty = ['the soup kitchen', 'Disneyland', 'the White House'];
    const insertz = [
      'spontaneously combusted',
      'melted into a puddle on the sidewalk',
      'turned into a slug and crawled away',
    ];

    this.setState({
      isShowStory: true,
      insertx: randomValueFromArray(insertx),
      inserty: randomValueFromArray(inserty),
      insertz: randomValueFromArray(insertz),
      customName,
    });
  };

  handleCheck = event => {
    const check = event.target.value;
    this.temperature(check);
  };

  showStory = () => {
    const {
      isShowStory,
      temperatureString,
      weightString,
      customName,
      insertx,
      inserty,
      insertz,
    } = { ...this.state };
    if (isShowStory) {
      const story = `It was ${temperatureString} outside, so ${insertx} went for a walk. When they got to ${inserty}, they stared in horror for a few moments, then ${insertz}. ${customName} saw the whole thing, but was not surprised — ${insertx} weighs ${weightString}, and it was a hot day.`;
      return <p className="story">{story}</p>;
    }
    return '';
  };

  render() {
    return (
      <div className="container-fluid body float-left">
        <div className="sillyd">
          <label className="sillyl" htmlFor="customname">
            Enter custom name:
          </label>
          <input className="sillyi" type="text" placeholder="" ref={this.customNameRef} />
        </div>
        <div className="sillyd">
          <label className="sillyl" htmlFor="us">
            US
            <input
              className="sillyi"
              id="us"
              type="radio"
              name="ukus"
              value="us"
              onChange={this.handleCheck}
              defaultChecked
            />
          </label>
          <label className="sillyl" htmlFor="uk">
            UK
            <input
              className="sillyi"
              id="uk"
              type="radio"
              name="ukus"
              value="uk"
              onChange={this.handleCheck}/>
          </label>
        </div>
        <div className="sillyd">
          <button onClick={this.handleGenerate}>Generate random story</button>
        </div>

        {this.showStory()}
      </div>
    );
  }
}

export default SillyStoryGenerator;
