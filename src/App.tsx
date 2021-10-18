import React from 'react';
import Mic from './images/mic.png';
import NewLogo from './newLogo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <div className='green-line'></div>
        <div className='card  blink-box'>
          <div className='card-inside blink-box'></div>
        </div>
        <div className='card-text-container'>
          <p className='title flicker'>زروان</p>
          <p className='title'>روایت می‌کند </p>
          <p className='title'>منتظر باشید...</p>
        </div>
        <div className='yellow-line'></div>
        <div className='footer'>
          <img src={NewLogo} className='App-logo' alt='logo' />
          {/* <img src={Mic} className='mic-logo' alt='logo' /> */}
          <div className='footer-content'>
            <div style={{ marginTop: '1rem' }}>پادکست زروان</div>
            <div> خیلی خیلی زود</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
