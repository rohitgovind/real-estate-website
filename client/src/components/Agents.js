import React from 'react';
import jamesImage from '../assets/images/James-wilson.jpg';
import lisaImage from '../assets/images/Lisa-anderson.jpg';
import davidImage from '../assets/images/David-Martinz.jpg';

function Agents() {
  const agents = [
    {
      id: 1,
      name: "James Wilson",
      title: "Senior Property Agent",
      image: jamesImage,
      phone: "+1 (555) 123-4567",
      email: "james.wilson@realestate.com",
      listings: 156
    },
    {
      id: 2,
      name: "Lisa Anderson",
      title: "Property Investment Specialist",
      image: lisaImage,
      specialization: "Investment Properties",
      experience: "12+ years",
      phone: "+1 (555) 234-5678",
      email: "lisa.anderson@realestate.com"
    },
    {
      id: 3,
      name: "David Martinez",
      title: "Residential Property Expert",
      image: davidImage,
      specialization: "Family Homes",
      experience: "10+ years",
      phone: "+1 (555) 345-6789",
      email: "david.martinez@realestate.com"
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
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    card: {
      background: 'white',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 10px 20px rgba(72, 52, 212, 0.1)',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: '0 15px 30px rgba(72, 52, 212, 0.2)',
      },
    },
    imageContainer: {
      position: 'relative',
      paddingTop: '100%',
      overflow: 'hidden',
    },
    image: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease',
    },
    info: {
      padding: '1.5rem',
    },
    name: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#2f3640',
      marginBottom: '0.5rem',
    },
    title: {
      color: '#4834d4',
      fontSize: '1rem',
      marginBottom: '1rem',
    },
    details: {
      fontSize: '0.9rem',
      color: '#666',
      marginBottom: '0.5rem',
    },
    contact: {
      marginTop: '1rem',
      display: 'flex',
      gap: '1rem',
    },
    button: {
      flex: 1,
      padding: '0.8rem',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '0.9rem',
      fontWeight: '500',
    },
    phoneButton: {
      background: '#4834d4',
      color: 'white',
      '&:hover': {
        background: '#686de0',
      },
    },
    emailButton: {
      background: '#f5f6fa',
      color: '#4834d4',
      border: '2px solid #4834d4',
      '&:hover': {
        background: '#4834d4',
        color: 'white',
      },
    }
  };

  return (
    <section style={styles.container}>
      <h2 style={styles.title}>Our Expert Agents</h2>
      <div style={styles.grid}>
        {agents.map(agent => (
          <div key={agent.id} style={styles.card}>
            <div style={styles.imageContainer}>
              <img src={agent.image} alt={agent.name} style={styles.image} />
            </div>
            <div style={styles.info}>
              <h3 style={styles.name}>{agent.name}</h3>
              <p style={styles.title}>{agent.title}</p>
              <p style={styles.details}>Specialization: {agent.specialization}</p>
              <p style={styles.details}>Experience: {agent.experience}</p>
              <div style={styles.contact}>
                <a href={`tel:${agent.phone}`} style={{...styles.button, ...styles.phoneButton}}>
                  Call
                </a>
                <a href={`mailto:${agent.email}`} style={{...styles.button, ...styles.emailButton}}>
                  Email
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Agents;