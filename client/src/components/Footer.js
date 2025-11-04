import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const styles = {
    footer: {
      background: 'linear-gradient(135deg, #2f3640 0%, #353b48 100%)',
      color: 'white',
      padding: '4rem 2rem 2rem',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
    },
    section: {
      marginBottom: '2rem',
    },
    title: {
      color: '#f5f6fa',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      position: 'relative',
      paddingBottom: '0.5rem',
      '&::after': {
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '50px',
        height: '2px',
        background: '#4834d4',
      },
    },
    link: {
      color: '#dcdde1',
      textDecoration: 'none',
      display: 'block',
      marginBottom: '0.8rem',
      transition: 'color 0.3s ease',
      '&:hover': {
        color: '#4834d4',
      },
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem',
      color: '#dcdde1',
    },
    icon: {
      marginRight: '0.5rem',
      color: '#4834d4',
    },
    socialLinks: {
      display: 'flex',
      gap: '1rem',
      marginTop: '1rem',
    },
    socialIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: '#4834d4',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-3px)',
        background: '#686de0',
      },
    },
    bottom: {
      borderTop: '1px solid rgba(255,255,255,0.1)',
      marginTop: '2rem',
      paddingTop: '2rem',
      textAlign: 'center',
      color: '#dcdde1',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h3 style={styles.title}>About Us</h3>
          <p style={{ color: '#dcdde1', lineHeight: '1.6' }}>
            We are committed to providing exceptional real estate services, 
            helping you find the perfect property that matches your dreams 
            and investment goals.
          </p>
          <div style={styles.socialLinks}>
            <a href="#" style={styles.socialIcon}>f</a>
            <a href="#" style={styles.socialIcon}>t</a>
            <a href="#" style={styles.socialIcon}>in</a>
            <a href="#" style={styles.socialIcon}>ig</a>
          </div>
        </div>

        <div style={styles.section}>
          <h3 style={styles.title}>Quick Links</h3>
          <Link to="/properties" style={styles.link}>Properties</Link>
          <Link to="/agents" style={styles.link}>Our Agents</Link>
          <Link to="/about" style={styles.link}>About Us</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
          <Link to="/privacy" style={styles.link}>Privacy Policy</Link>
        </div>

        <div style={styles.section}>
          <h3 style={styles.title}>Property Types</h3>
          <Link to="/properties?type=apartment" style={styles.link}>Apartments</Link>
          <Link to="/properties?type=house" style={styles.link}>Houses</Link>
          <Link to="/properties?type=villa" style={styles.link}>Villas</Link>
          <Link to="/properties?type=commercial" style={styles.link}>Commercial</Link>
          <Link to="/properties?type=land" style={styles.link}>Land</Link>
        </div>

        <div style={styles.section}>
          <h3 style={styles.title}>Contact Info</h3>
          <div style={styles.contactItem}>
            <span style={styles.icon}>📍</span>
            123 Real Estate Ave, City, State 12345
          </div>
          <div style={styles.contactItem}>
            <span style={styles.icon}>📞</span>
            +1 (555) 123-4567
          </div>
          <div style={styles.contactItem}>
            <span style={styles.icon}>✉️</span>
            info@realestate.com
          </div>
          <div style={styles.contactItem}>
            <span style={styles.icon}>⏰</span>
            Mon - Fri: 9:00 AM - 6:00 PM
          </div>
        </div>
      </div>

      <div style={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Real Estate Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;