import React, { Component } from 'react';
import './Timer.css'

class Timer extends Component {
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
            />
          </label>
          <label>
            Minutes
            <input
              type="number"
            />
          </label>
          <label>
            Seconds
            <input
              type="number"
            />
          </label>
        </div>

        <div>
          <button>1x Round</button>

          <button>2x Rounds</button>

          <button>GO!</button>
        </div>
      </main>
    );
  }
}

export default Timer;