import React from 'react';
import { Link } from 'react-router-dom';
import TestimonialsCarousel from './TestimonialsCarousel';
import Agents from './Agents';
import backgroundImage from '../assets/images/Background-image.jpg';
import Footer from './Footer';
import PropertyTypes from './PropertyTypes';
import CallToAction from './CallToAction';

function Homepage() {
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
    },
    hero: {
      background: `linear-gradient(rgba(14, 46, 80, 0.7), rgba(14, 46, 80, 0.7)), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '600px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: 'white',
      padding: '2rem',
    },
    heroTitle: {
      fontSize: '3.5rem',
      marginBottom: '1rem',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    },
    heroSubtitle: {
      fontSize: '1.5rem',
      marginBottom: '2rem',
      fontWeight: '500',
    },
    heroButton: {
      background: '#00B98E',
      color: 'white',
      padding: '1rem 2rem',
      borderRadius: '5px',
      textDecoration: 'none',
      fontSize: '1.2rem',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      '&:hover': {
        background: '#009975',
      },
    },
    featuresSection: {
      padding: '4rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      marginTop: '2rem',
    },
    featureCard: {
      background: 'white',
      padding: '2rem',
      borderRadius: '10px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
    featureIcon: {
      fontSize: '2.5rem',
      marginBottom: '1rem',
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: '2.5rem',
      color: '#2c3e50',
      marginBottom: '2rem',
    },
    testimonialSection: {
      padding: '4rem 2rem',
      background: 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)',
    },
    testimonialContainer: {
      maxWidth: '1000px',
      margin: '0 auto',
    },
    ctaSection: {
      padding: '6rem 2rem',
      background: 'linear-gradient(135deg, #4834d4 0%, #686de0 100%)',
      textAlign: 'center',
      color: 'white',
    },
    ctaContent: {
      maxWidth: '800px',
      margin: '0 auto',
    },
    ctaTitle: {
      fontSize: '3rem',
      marginBottom: '1.5rem',
      color: 'white',
    },
    ctaText: {
      fontSize: '1.2rem',
      marginBottom: '2rem',
      opacity: 0.9,
    },
    ctaButtons: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
    },
    ctaPrimaryButton: {
      background: 'white',
      color: '#4834d4',
      padding: '1rem 2rem',
      borderRadius: '8px',
      textDecoration: 'none',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-3px)',
        boxShadow: '0 5px 15px rgba(255,255,255,0.3)',
      },
    },
    ctaSecondaryButton: {
      background: 'transparent',
      color: 'white',
      padding: '1rem 2rem',
      borderRadius: '8px',
      textDecoration: 'none',
      fontWeight: 'bold',
      border: '2px solid white',
      transition: 'all 0.3s ease',
      '&:hover': {
        background: 'white',
        color: '#4834d4',
        transform: 'translateY(-3px)',
        boxShadow: '0 5px 15px rgba(255,255,255,0.3)',
      },
    },
    agentSection: {
      marginBottom: '4rem',
    },
  };

  const features = [
    {
      icon: '🏠',
      title: 'Find Your Dream Home',
      description: 'Browse through our carefully curated selection of properties.',
    },
    {
      icon: '💰',
      title: 'Best Deals',
      description: 'Get the best prices and investment opportunities.',
    },
    {
      icon: '📍',
      title: 'Prime Locations',
      description: 'Properties in the most sought-after neighborhoods.',
    },
    {
      icon: '🤝',
      title: 'Expert Support',
      description: '24/7 support from our real estate experts.',
    },
  ];

  return (
    <>
      <div style={styles.container}>
        <div style={styles.hero}>
          <h1 style={styles.heroTitle}>
            Find A Perfect Home<br />
            To Live With Your Family
          </h1>
          <p style={styles.heroSubtitle}>
            Discover your ideal property from our exclusive selection of homes
          </p>
          <Link to="/properties" style={styles.heroButton}>
            Get Started Now
          </Link>
        </div>

        <PropertyTypes />

        <CallToAction />

        <Agents />

        <section style={styles.testimonialSection}>
          <div style={styles.testimonialHeader}>
            <h5 style={styles.testimonialSubtitle}>TESTIMONIAL</h5>
            <h2 style={styles.testimonialTitle}>Our Clients Say!</h2>
          </div>
          <div style={styles.testimonialContainer}>
            <TestimonialsCarousel />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;