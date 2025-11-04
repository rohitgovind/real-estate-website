import React from 'react';
import ContactForm from './ContactForm';

function Contact() {
  const styles = {
    container: { maxWidth: '1000px', margin: '3rem auto', padding: '0 1rem' },
    header: { color: '#00B98E', fontWeight: 600, marginBottom: '0.5rem' },
    title: { color: '#0E2E50', fontSize: '2rem', marginBottom: '1rem' },
    info: { color: '#666', lineHeight: 1.8 },
  };

  return (
    <div style={styles.container}>
      <h5 style={styles.header}>CONTACT US</h5>
      <h2 style={styles.title}>Get In Touch With Our Team</h2>
      <p style={styles.info}>
        Have questions? Fill out the form and our certified agents will reach
        out to you shortly.
      </p>

      <ContactForm />
    </div>
  );
}

export default Contact;
