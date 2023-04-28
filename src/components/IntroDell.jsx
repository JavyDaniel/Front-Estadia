import React from 'react';
import '../App.css';
// import { Button } from './Button';
import '../styles/IntroDell.css';

function IntroDell() {
  return (
    <div className='hero-container'>
      <video src='/videos/dell2.mp4' autoPlay loop muted />
      <h1>DELL Tecnologies</h1>
      <p></p>
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div> */}
    </div>
  );
}

export default IntroDell;
