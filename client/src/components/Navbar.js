import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          <span style={styles.brand}>Makaan</span>
        </Link>
        <div style={styles.menu}>
          <Link to="/" style={styles.menuItem}>Home</Link>
          <Link to="/about" style={styles.menuItem}>About</Link>
          <Link to="/properties" style={styles.menuItem}>Property</Link>
          <Link to="/pages" style={styles.menuItem}>Pages</Link>
          <Link to="/contact" style={styles.menuItem}>Contact</Link>
          <Link to="/add-property" style={styles.button}>Add Property</Link>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    background: '#FFFFFF',
    padding: '1rem 2rem',
    color: '#0E2E50',
    boxShadow: '0 0 45px rgba(0, 0, 0, .08)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    transition: 'all 0.3s ease',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: '#0E2E50',
    textDecoration: 'none',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  brand: {
    color: '#00B98E',
  },
  menu: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },
  menuItem: {
    color: '#0E2E50',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#00B98E',
    },
  },
  button: {
    background: '#00B98E',
    color: '#FFFFFF',
    padding: '0.8rem 1.5rem',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: '#009975',
    },
  },
};

export default Navbar;