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
          <p className='sidebar-title'>ژنرال های بیزانسی</p>

          {/* <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '1rem',
            }}
          >
            <StartSvg />
            <StartSvg />
            <StartSvg />
          </div> */}
          <img src={mics} className='mics ' alt='logo' />
          <img src={gust} className='avatar ' alt='logo' />
        </div>
        {/* <div className='green-line'></div> */}
        <div className='card'>
          <div className='card-inside'>
            {/* <div className='yellow-line'></div> */}
            <p className='title'>مصاحبه با نوید گل پور</p>
            <br />
            <p className='title'>بنیانگذار وب سایت </p>
            <p className='title'>www.hezarchiz.com </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
