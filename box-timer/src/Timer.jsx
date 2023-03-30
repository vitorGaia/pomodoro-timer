import React, { Component } from 'react';
import './Timer.css'

class Timer extends Component {
  state = {
    inputHours: '',
    inputMinutes: '',
    inputSeconds: '',
    display: '00:00:00'
  }

  handleChange = ({target}) => {
    this.setState({
      [target.name]: target.value,
    })
  }

  goCountdown = () => {
    const { inputHours, inputMinutes, inputSeconds } = this.state;
    const fullTimeInSeconds = (+inputHours * 60 * 60) + (+inputMinutes * 60) + (+inputSeconds);
    this.timer(fullTimeInSeconds)
  }

  timer = (duration) => {
    let timer = duration;

    setInterval(() => {
      let hoursCalc = Math.floor((timer / 60) / 60);
      let minutesCalc = Math.floor((timer / 60));
      let secondsCalc = Math.floor(timer % 60);

      hoursCalc = hoursCalc < 10 ? '0' + hoursCalc : hoursCalc;
      minutesCalc = minutesCalc < 10 ? '0' + minutesCalc : minutesCalc;
      secondsCalc = secondsCalc < 10 ? '0' + secondsCalc : secondsCalc;

      this.setState({
        display: `${hoursCalc} : ${minutesCalc} : ${secondsCalc}`,
        inputHours: '',
        inputMinutes: '',
        inputSeconds: '',
      });

      timer -= 1;

      if (timer < 0) {
        this.setState({
          display: 'ACABOU!',
        })
      }
    }, 1000);
  }

  render() {
    const { inputHours, inputMinutes, inputSeconds, display } = this.state;
    return (
      <main>
        <div>
          <p>{ display }</p>
        </div>

        <div>
          <label>
            Hours
            <input
              type="number"
              name="inputHours"
              max="24"
              min="0"
              onChange={this.handleChange}
              value={inputHours}
            />
          </label>

          <label>
            Minutes
            <input
              type="number"
              name="inputMinutes"
              max="59"
              min="0"
              onChange={this.handleChange}
              value={inputMinutes}
            />
          </label>

          <label>
            Seconds
            <input
              type="number"
              name="inputSeconds"
              max="59"
              min="0"
              onChange={this.handleChange}
              value={inputSeconds}
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