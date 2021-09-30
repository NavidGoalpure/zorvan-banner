import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <div className='green-line'></div>
        {/* <img src={logo} className='App-logo' alt='logo' /> */}
        <div className='card'>
          <div className='card-inside'>
            {/* <div className='yellow-line'></div> */}
            <p className='title'>پول های ابتدایی</p>
          </div>
        </div>
        <div className='yellow-line'></div>
        <div className='footer'>
          <div style={{ marginTop: '2rem' }}> قسمت اول</div>
          <div> اسپانسر: www.hezarchiz.com</div>
        </div>
      </div>
    </div>
  );
}

export default App;
