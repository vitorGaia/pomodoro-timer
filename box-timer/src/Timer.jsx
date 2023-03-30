import React, { Component } from 'react';
import './Timer.css'

class Timer extends Component {
  state = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

  handleChange = ({target}) => {
    this.setState({
      [target.name]: target.value,
    })
  }

  goCountdown = () => {
    const { hours, minutes, seconds } = this.state;
    const fullTimeInSeconds = (+hours * 60 * 60) + (+minutes * 60) + (+seconds);
    console.log(fullTimeInSeconds);
  }

  render() {
    return (
      <main>
        <div>
          <p>00:00:00</p>
        </div>

        <div>
          <label>
            Hours
            <input
              type="number"
              name="hours"
              max="24"
              min="0"
              onChange={this.handleChange}
            />
          </label>

          <label>
            Minutes
            <input
              type="number"
              name="minutes"
              max="59"
              min="0"
              onChange={this.handleChange}
            />
          </label>

          <label>
            Seconds
            <input
              type="number"
              name="seconds"
              max="59"
              min="0"
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div>
          <button>1x Round</button>

          <button>2x Rounds</button>

          <button id="btn-go" onClick={this.goCountdown}>GO!</button>
        </div>
      </main>
    );
  }
}

export default Timer;