import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; 
// import logo from '../../assets/images/logo1.jpg';
import './navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [navStyles, setNavStyles] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const isMobileView = window.innerWidth <= 768;

    if (isMobileView) {
      if (scrollY > 850 || location.pathname !== '/') {
        setNavStyles({
          backgroundColor: 'rgba(66, 139, 226, 1)',
          color: 'white',
        });
      } else {
        setNavStyles({
          backgroundColor: 'transparent',
          color: 'white',
        });
      }
    } else {
      if (scrollY > 850 || location.pathname !== '/') {
        setNavStyles({
          backgroundColor: 'rgba(66, 139, 226, 0.3)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          backdropFilter: 'blur(20px)',
          webkitBackdropFilter: 'blur(20px)',
          borderRadius: '10px',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          color: 'black',
        });
      } else {
        setNavStyles({
          backgroundColor: 'transparent',
          boxShadow: 'none',
          backdropFilter: 'none',
          webkitBackdropFilter: 'none',
          borderRadius: '0',
          border: 'none',
          color: 'white',
        });
      }
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='nav' style={navStyles}>
      <Link to='/' className='imgg'>
        {/* <img src={logo} height={50} width={50} style={{ marginBottom: '10px', borderRadius: '50%', marginTop: '10px' }} alt="Shiphere" /> */}
      </Link>
      <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to='/' onClick={handleMenuToggle}>Home</Link></li>
          <li><Link to='/about' onClick={handleMenuToggle}>About</Link></li>
        </ul>
      </div>
      <div className='hamburger' onClick={handleMenuToggle}>
        {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
    </div>
  );
};

export default Navbar;
