import React from 'react';
import { Link } from 'react-router-dom';

function PropertyTypes() {
  const types = [
    {
      icon: '🏠',
      title: 'Apartment',
      description: 'Modern living spaces in prime locations',
      link: '/properties?type=apartment'
    },
    {
      icon: '🏡',
      title: 'Villa',
      description: 'Luxury villas with premium amenities',
      link: '/properties?type=villa'
    },
    {
      icon: '🏢',
      title: 'Office',
      description: 'Professional spaces for businesses',
      link: '/properties?type=office'
    },
    {
      icon: '🏘️',
      title: 'Building',
      description: 'Multi-unit residential complexes',
      link: '/properties?type=building'
    },
    {
      icon: '🏪',
      title: 'Shop',
      description: 'Prime retail locations',
      link: '/properties?type=shop'
    },
    {
      icon: '📍',
      title: 'Garage',
      description: 'Secure parking solutions',
      link: '/properties?type=garage'
    }
  ];

  const styles = {
    section: {
      padding: '5rem 0',
      background: '#fff',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    header: {
      textAlign: 'center',
      marginBottom: '4rem',
    },
    subtitle: {
      color: '#00B98E',
      fontWeight: '500',
      marginBottom: '0.5rem',
    },
    title: {
      color: '#0E2E50',
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
    description: {
      color: '#666',
      maxWidth: '600px',
      margin: '0 auto',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
    },
    card: {
      textAlign: 'center',
      padding: '2rem',
      background: '#fff',
      borderRadius: '10px',
      boxShadow: '0 0 45px rgba(0, 0, 0, .08)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      textDecoration: 'none',
      '&:hover': {
        transform: 'translateY(-5px)',
      },
    },
    icon: {
      fontSize: '3rem',
      marginBottom: '1rem',
    },
    cardTitle: {
      color: '#0E2E50',
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '0.5rem',
    },
    cardDescription: {
      color: '#666',
      fontSize: '0.9rem',
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h5 style={styles.subtitle}>PROPERTY TYPES</h5>
          <h2 style={styles.title}>Property Types We Offer</h2>
          <p style={styles.description}>
            Explore our diverse range of property types to find the perfect match for your needs.
          </p>
        </div>

        <div style={styles.grid}>
          {types.map((type, index) => (
            <Link to={type.link} key={index} style={styles.card}>
              <div style={styles.icon}>{type.icon}</div>
              <h4 style={styles.cardTitle}>{type.title}</h4>
              <p style={styles.cardDescription}>{type.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PropertyTypes;