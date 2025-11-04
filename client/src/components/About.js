import React from 'react';

function About() {
  const styles = {
    container: { maxWidth: '1000px', margin: '3rem auto', padding: '0 1rem' },
    header: { color: '#00B98E', fontWeight: 600, marginBottom: '0.5rem' },
    title: { color: '#0E2E50', fontSize: '2rem', marginBottom: '1rem' },
    text: { color: '#666', lineHeight: 1.8 },
  };

  return (
    <div style={styles.container}>
      <h5 style={styles.header}>ABOUT US</h5>
      <h2 style={styles.title}>We Help You Find The Best Property</h2>
      <p style={styles.text}>
        Our mission is to connect people with the perfect property for their
        needs. We combine expert knowledge, personalized service, and a
        curated selection of properties to make your search easy and enjoyable.
      </p>
      <p style={{...styles.text, marginTop: '1rem'}}>
        We are committed to transparency and quality. Whether you are buying,
        renting, or investing, our team of experienced agents will support you
        every step of the way.
      </p>
    </div>
  );
}

export default About;
