import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ContactForm from './ContactForm';
import property1Image from '../assets/images/Property-1.jpg';
import property2Image from '../assets/images/Property-2.jpg';
import { useFavorites } from '../context/FavoritesContext';

function PropertyDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const { isFavorite, toggleFavorite } = useFavorites();

  const getPropertyImage = (imagePath) => {
    if (imagePath.includes('Property-1.jpg')) {
      return property1Image;
    } else if (imagePath.includes('Property-2.jpg')) {
      return property2Image;
    }
    return imagePath; // Return original path for other images
  };

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/properties/${id}`);
        const propertyData = response.data;
        // Map the correct image based on property id
        propertyData.image = propertyData.id === 1 ? property1Image : propertyData.id === 2 ? property2Image : propertyData.image;
        setProperty(propertyData);
      } catch (error) {
        console.error('Error fetching property:', error);
      }
    };

    fetchProperty();
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <div style={styles.imageContainer}>
          <img src={getPropertyImage(property.image)} alt={property.title} style={styles.image} />
          <button 
            onClick={() => toggleFavorite(property.id)}
            style={{
              ...styles.favoriteButton,
              background: isFavorite(property.id) ? '#ff4757' : 'white'
            }}
          >
            {isFavorite(property.id) ? '❤️' : '🤍'}
          </button>
        </div>
        <div style={styles.details}>
          <h1 style={styles.title}>{property.title}</h1>
          <h2 style={styles.price}>${property.price.toLocaleString()}</h2>
          
          <div style={styles.infoGrid}>
            <div style={styles.infoCard}>
              <div style={styles.infoIcon}>📍</div>
              <div style={styles.infoLabel}>Location</div>
              <div style={styles.infoValue}>{property.location}</div>
            </div>
            
            <div style={styles.infoCard}>
              <div style={styles.infoIcon}>🏠</div>
              <div style={styles.infoLabel}>Property Type</div>
              <div style={styles.infoValue}>{property.type}</div>
            </div>
            
            <div style={styles.infoCard}>
              <div style={styles.infoIcon}>🛏️</div>
              <div style={styles.infoLabel}>Bedrooms</div>
              <div style={styles.infoValue}>{property.bedrooms}</div>
            </div>
            
            <div style={styles.infoCard}>
              <div style={styles.infoIcon}>🚿</div>
              <div style={styles.infoLabel}>Bathrooms</div>
              <div style={styles.infoValue}>{property.bathrooms}</div>
            </div>
            
            <div style={styles.infoCard}>
              <div style={styles.infoIcon}>📐</div>
              <div style={styles.infoLabel}>Area</div>
              <div style={styles.infoValue}>{property.area} sqft</div>
            </div>
          </div>
          
          {property.description && (
            <div style={{marginTop: '2rem', color: '#666', lineHeight: '1.6'}}>
              <h3 style={{color: '#2c3e50', marginBottom: '1rem'}}>About this property</h3>
              <p>{property.description}</p>
            </div>
          )}

          <ContactForm propertyId={property.id} propertyTitle={property.title} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
    minHeight: '100vh',
    animation: 'fadeIn 0.5s ease-out',
  },
  contentWrapper: {
    background: 'white',
    borderRadius: '15px',
    padding: '2rem',
    boxShadow: '0 10px 20px rgba(72, 52, 212, 0.15)',
    transition: 'transform 0.3s ease',
    animation: 'fadeIn 0.5s ease-out',
  },
  imageContainer: {
    position: 'relative',
    marginBottom: '2rem',
  },
  favoriteButton: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  image: {
    width: '100%',
    height: '500px',
    objectFit: 'cover',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  details: {
    marginTop: '2rem',
  },
  title: {
    fontSize: '2.5rem',
    color: '#2c3e50',
    marginBottom: '1rem',
  },
  price: {
    fontSize: '2rem',
    color: '#2193b0',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginTop: '2rem',
  },
  infoCard: {
    background: '#f8f9fa',
    padding: '1.5rem',
    borderRadius: '10px',
    textAlign: 'center',
  },
  infoIcon: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
  },
  infoLabel: {
    color: '#666',
    marginBottom: '0.5rem',
  },
  infoValue: {
    fontSize: '1.2rem',
    color: '#2c3e50',
    fontWeight: 'bold',
  },
};

export default PropertyDetail;