import React, { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [name, setName] = useState();
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();

    if (localStorage.getItem("user")) {
      setName("LOGOUT");
    } else {
      setName("SIGN UP");
    }

  },);

  window.addEventListener('resize', showButton);

  const loginn  = (event) => {
    
    closeMobileMenu()
    if (localStorage.getItem("user")) {
      localStorage.removeItem('user');
      
    } else {
      event.preventDefault();
      navigate("/login")
    }

    };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img
              width="171"
              height="40"
              src="https://digiproduct.com/wp-content/uploads/2021/09/Logo-blanco.webp"
              class="attachment-full size-full wp-image-6214 entered lazyloaded"
              alt=""
              data-lazy-src="https://digiproduct.com/wp-content/uploads/2021/09/Logo-blanco.webp"
              data-ll-status="loaded"
            ></img>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/dell'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                DELL
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/chat'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Dudas
              </Link>
            </li>

            <li>
              <Link
                to='/'
                className='nav-links-mobile'
                onClick={loginn}
              >
                {name}
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' nameButton={name} onClick={loginn}></Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
