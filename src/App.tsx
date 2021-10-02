import React from 'react';
import NavidPic from './images/navidPic.jpg';
import './App.css';
import StartSvg from './star';

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <div className='sidebar'>
          <p className='sidebar-title'>ژنرال های بیزانسی</p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '1rem',
            }}
          >
            <StartSvg />
            <StartSvg />
            <StartSvg />
          </div>
          <img src={NavidPic} className='avatar ' alt='logo' />
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
        {/* <div className='yellow-line'></div> */}
        {/* <div className='footer'>
          <div style={{ marginTop: '2rem' }}> قسمت اول</div>
          <div> اسپانسر: www.hezarchiz.com</div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
