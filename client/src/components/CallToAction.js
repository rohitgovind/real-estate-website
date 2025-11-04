import React from 'react';
import { Link } from 'react-router-dom';
import agentImage from '../assets/images/Real-Estate-Agent.jpg';

function CallToAction() {
  const styles = {
    section: {
      padding: '5rem 0',
      background: '#F8F9FA',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '3rem',
      alignItems: 'center',
    },
    content: {
      padding: '2rem',
    },
    subtitle: {
      color: '#00B98E',
      fontWeight: '500',
      marginBottom: '0.5rem',
      fontSize: '1.1rem',
    },
    title: {
      color: '#0E2E50',
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      lineHeight: '1.2',
    },
    description: {
      color: '#666',
      marginBottom: '2rem',
      lineHeight: '1.6',
    },
    buttons: {
      display: 'flex',
      gap: '1rem',
    },
    primaryButton: {
      background: '#00B98E',
      color: '#fff',
      padding: '1rem 2rem',
      borderRadius: '5px',
      textDecoration: 'none',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      '&:hover': {
        background: '#009975',
      },
    },
    secondaryButton: {
      background: '#0E2E50',
      color: '#fff',
      padding: '1rem 2rem',
      borderRadius: '5px',
      textDecoration: 'none',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      '&:hover': {
        background: '#0b2440',
      },
    },
    imageContainer: {
      position: 'relative',
      height: '100%',
      minHeight: '400px',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '10px',
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.content}>
          <h5 style={styles.subtitle}>CONTACT WITH US</h5>
          <h2 style={styles.title}>Contact With Our Certified Agent</h2>
          <p style={styles.description}>
            Get in touch with our experienced real estate agents who can help you find your perfect property.
            Our certified agents are ready to guide you through every step of your real estate journey.
          </p>
          <div style={styles.buttons}>
            <Link to="/contact" style={styles.primaryButton}>
              Make An Appointment
            </Link>
            <Link to="/agents" style={styles.secondaryButton}>
              Learn More
            </Link>
          </div>
        </div>
        <div style={styles.imageContainer}>
          <img 
            src={agentImage} 
            alt="Real Estate Agent" 
            style={styles.image}
          />
        </div>
      </div>
    </section>
  );
}

export default CallToAction;