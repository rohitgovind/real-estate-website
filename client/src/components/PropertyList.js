import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import SearchFilters from './SearchFilters';
import property1Image from '../assets/images/Property-1.jpg';
import property2Image from '../assets/images/Property-2.jpg';
import { useFavorites } from '../context/FavoritesContext';

function PropertyList() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const { isFavorite, toggleFavorite } = useFavorites();
  const location = useLocation();

  const getPropertyImage = (imagePath) => {
    if (imagePath.includes('Property-1.jpg')) {
      return property1Image;
    } else if (imagePath.includes('Property-2.jpg')) {
      return property2Image;
    }
    return imagePath; // Return original path for other images
  };

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        // pass through 'type' query param if present in URL
        const params = new URLSearchParams(location.search);
        const type = params.get('type');
        const url = type ? `http://localhost:5000/api/properties?type=${encodeURIComponent(type)}` : 'http://localhost:5000/api/properties';
        const response = await axios.get(url);
        // Map the correct images to the properties
        const propertiesWithImages = response.data.map(property => ({
          ...property,
          image: property.id === 1 ? property1Image : property.id === 2 ? property2Image : property.image
        }));
        setProperties(propertiesWithImages);
        setFilteredProperties(propertiesWithImages);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, [location.search]);

  const handleFilter = (filters) => {
    let filtered = properties;

    if (filters.priceMin) {
      filtered = filtered.filter(p => p.price >= filters.priceMin);
    }
    if (filters.priceMax) {
      filtered = filtered.filter(p => p.price <= filters.priceMax);
    }
    if (filters.bedrooms) {
      filtered = filtered.filter(p => p.bedrooms >= filters.bedrooms);
    }
    if (filters.propertyType && filters.propertyType !== 'all') {
      filtered = filtered.filter(p => p.type === filters.propertyType);
    }
    if (filters.location) {
      filtered = filtered.filter(p => 
        p.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    setFilteredProperties(filtered);
  };

  return (
    <div style={styles.container}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '2rem', fontSize: '2.5rem' }}>
        Discover Your Dream Home
      </h1>
      
      <SearchFilters onFilter={handleFilter} />
      
      <div style={styles.grid}>
        {filteredProperties.map((property) => (
          <div style={styles.cardWrapper} key={property.id}>
            <Link to={`/property/${property.id}`} style={styles.card}>
              <div style={styles.imageContainer}>
                <img src={getPropertyImage(property.image)} alt={property.title} style={styles.image} />
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFavorite(property.id);
                  }}
                  style={{
                    ...styles.favoriteButton,
                    background: isFavorite(property.id) ? '#ff4757' : 'white'
                  }}
                >
                  {isFavorite(property.id) ? '❤️' : '🤍'}
                </button>
              </div>
              <div style={styles.details}>
                <h2 style={styles.title}>{property.title}</h2>
                <p style={styles.price}>${property.price.toLocaleString()}</p>
                <p style={styles.location}>{property.location}</p>
                <div style={styles.specs}>
                  <span>🛏️ {property.bedrooms} beds</span>
                  <span>🚿 {property.bathrooms} baths</span>
                  <span>📐 {property.area} sqft</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      
      {filteredProperties.length === 0 && (
        <div style={styles.noResults}>
          No properties match your search criteria.
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
    minHeight: '100vh',
    animation: 'fadeIn 0.5s ease-out',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '2rem',
    maxWidth: '1400px',
    margin: '0 auto',
    opacity: 0,
    animation: 'fadeIn 0.5s ease-out forwards',
    animationDelay: '0.2s',
  },
  cardWrapper: {
    position: 'relative',
  },
  card: {
    border: 'none',
    borderRadius: '12px',
    overflow: 'hidden',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    backgroundColor: 'white',
    boxShadow: '0 4px 6px rgba(72, 52, 212, 0.1)',
    display: 'block',
    position: 'relative',
    '&:hover': {
      transform: 'translateY(-10px) scale(1.02)',
      boxShadow: '0 20px 25px rgba(72, 52, 212, 0.15)',
    },
    '&:hover img': {
      transform: 'scale(1.1)',
    },
  },
  imageContainer: {
    position: 'relative',
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
    zIndex: 1,
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  noResults: {
    textAlign: 'center',
    padding: '2rem',
    fontSize: '1.2rem',
    color: '#666',
    background: 'white',
    borderRadius: '10px',
    margin: '2rem auto',
    maxWidth: '600px',
  },
  image: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  details: {
    padding: '1.5rem',
  },
  title: {
    fontSize: '1.4rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#2c3e50',
  },
  price: {
    fontSize: '1.6rem',
    fontWeight: '700',
    color: '#2193b0',
    marginBottom: '0.5rem',
  },
  location: {
    color: '#666',
    fontSize: '1.1rem',
    marginBottom: '0.5rem',
  },
  specs: {
    color: '#888',
    fontSize: '0.9rem',
    display: 'flex',
    gap: '1rem',
  },
};

export default PropertyList;