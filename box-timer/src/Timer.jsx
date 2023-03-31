import React, { Component } from 'react';
import './Timer.css'
import sound from './audio/gongoAudio.mp3';

class Timer extends Component {
  state = {
    inputHours: '',
    inputMinutes: '',
    inputSeconds: '',
    display: '00 : 00 : 00',
    itsTime: false,
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
    const audio = new Audio(sound);
    audio.play();
    this.setState({
      display: '00 : 00 : 00',
      itsTime: true,
      inputHours: '',
      inputMinutes: '',
      inputSeconds: '',
    });
    let timer = duration;

    const test = setInterval(() => {
      let hoursCalc = Math.floor((timer / 60) / 60);
      let minutesCalc = Math.floor((timer / 60));
      let secondsCalc = Math.floor(timer % 60);

      hoursCalc = hoursCalc < 10 ? '0' + hoursCalc : hoursCalc;
      minutesCalc = minutesCalc < 10 ? '0' + minutesCalc : minutesCalc;
      secondsCalc = secondsCalc < 10 ? '0' + secondsCalc : secondsCalc;

      this.setState({
        display: `${hoursCalc} : ${minutesCalc} : ${secondsCalc}`,
      });

      timer -= 1;

      if (timer <= 0) {
        this.setState({
          display: 'E N D !',
          itsTime: false,
        })
        audio.play();
        clearInterval(test);
      }
    }, 1000);
  }

  render() {
    const { inputHours, inputMinutes, inputSeconds, display, itsTime } = this.state;
    const backgroundStyle = { backgroundImage: itsTime && "url('https://thumbs.gfycat.com/InfiniteMajorEarthworm-size_restricted.gif')" };
    const fontColorStyle = { color: itsTime && '#a51b0b' };
    const fontColorStyle2 = { color: itsTime && '#171820' };
    const displayNone = { display: itsTime && 'none' }

    return (
      <main>
        <div className='div-background' style={backgroundStyle}>
          {
            itsTime && <button className='timer-btn-close' onClick={() => this.setState({ itsTime: false })}>X</button>
          }

          <div className="show-count-container">
            <p style={fontColorStyle}>{ display }</p>
          </div>

          <div className='control-panel'>
            <div className='inputs-container' style={displayNone}>
              <label style={fontColorStyle2}>
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

              <label style={fontColorStyle2}>
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

              <label style={fontColorStyle2}>
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

            <div className='buttons-container' style={displayNone}>
              <button onClick={() => this.timer(1800)} style={fontColorStyle2}>Pomodoro - 30m 🍅</button>

              <button onClick={() => this.timer(600)} style={fontColorStyle2}>Interval - 10m ☕</button>

              <button id="btn-go" onClick={this.goCountdown} style={fontColorStyle2}>I choose! 🫡</button>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Timer;