import React from 'react';
import gust from './images/gust.jpg';
import mics from './images/mics.png';
import './App.css';
import StartSvg from './star';

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <div className='sidebar'>
          <p className='sidebar-title side-bar-title-motion'>
            ژنرال های بیزانسی
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '4rem',
              marginBottom: '7px',
            }}
          >
            <StartSvg />
            <StartSvg />
            <StartSvg />
          </div>
          <img src={gust} className='avatar ' alt='logo' />
          <img src={mics} className='mics ' alt='logo' />
        </div>
        {/* <div className='green-line'></div> */}
        <div className='card '>
          <div className='card-inside fade'></div>
        </div>
        <div className='card-text-container'>
          <p className='title'>
            مصاحبه با
            <span className='flicker' style={{ marginRight: '8px' }}>
              نوید گل پور
            </span>
          </p>

          <br />
          <p className='title'>بنیانگذار وب سایت </p>
          <p className='title'>www.hezarchiz.com </p>
        </div>
      </div>
    </div>
  );
}

export default App;
