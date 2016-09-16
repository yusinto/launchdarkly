import React, {Component} from 'react';

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.onClickGenerateRandom = ::this.onClickGenerateRandom;
  }

  onClickGenerateRandom() {
    this.props.generateRandom();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.isLDReady && !this.props.isLDReady) {
      this.props.initialiseHomeFlags();
    }
  }

  render() {
    return (
      <div>
        <p>
          Welcome to the homepage! The random number feature below is feature toggled.
        </p>
        {
          // feature toggle!
          this.props['random-number'] ?
            <div>
              <button onClick={this.onClickGenerateRandom}>Generate random number</button>
              <p>{this.props.randomNumber}</p>
            </div>
            :
            null
        }
      </div>
    );
  }
}