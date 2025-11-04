import React, { useState } from 'react';

function SearchFilters({ onFilter }) {
  const [filters, setFilters] = useState({
    priceMin: '',
    priceMax: '',
    bedrooms: '',
    propertyType: 'all',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
    onFilter({ ...filters, [name]: value });
  };

  const styles = {
    container: {
      padding: '1.5rem',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
      borderRadius: '15px',
      boxShadow: '0 10px 20px rgba(72, 52, 212, 0.1)',
      marginBottom: '2rem',
      transition: 'all 0.3s ease',
      animation: 'fadeIn 0.5s ease-out',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 15px 30px rgba(72, 52, 212, 0.15)',
      },
    },
    form: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1rem',
      animation: 'fadeIn 0.5s ease-out',
    },
    input: {
      padding: '1rem',
      border: '2px solid #e4e8f0',
      borderRadius: '10px',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      background: 'white',
      '&:focus': {
        outline: 'none',
        borderColor: '#4834d4',
        boxShadow: '0 0 0 3px rgba(72, 52, 212, 0.1)',
      },
      '&:hover': {
        borderColor: '#686de0',
      },
    },
    select: {
      padding: '1rem',
      border: '2px solid #e4e8f0',
      borderRadius: '10px',
      fontSize: '1rem',
      backgroundColor: 'white',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      appearance: 'none',
      backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%234834d4%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 1rem center',
      backgroundSize: '0.65em auto',
      paddingRight: '3rem',
      '&:focus': {
        outline: 'none',
        borderColor: '#4834d4',
        boxShadow: '0 0 0 3px rgba(72, 52, 212, 0.1)',
      },
      '&:hover': {
        borderColor: '#686de0',
      },
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <input
          type="number"
          name="priceMin"
          placeholder="Min Price"
          style={styles.input}
          value={filters.priceMin}
          onChange={handleChange}
        />
        <input
          type="number"
          name="priceMax"
          placeholder="Max Price"
          style={styles.input}
          value={filters.priceMax}
          onChange={handleChange}
        />
        <select
          name="bedrooms"
          style={styles.select}
          value={filters.bedrooms}
          onChange={handleChange}
        >
          <option value="">Any Beds</option>
          <option value="1">1+ Beds</option>
          <option value="2">2+ Beds</option>
          <option value="3">3+ Beds</option>
          <option value="4">4+ Beds</option>
        </select>
        <select
          name="propertyType"
          style={styles.select}
          value={filters.propertyType}
          onChange={handleChange}
        >
          <option value="all">All Types</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Condo">Condo</option>
          <option value="Penthouse">Penthouse</option>
        </select>
        <input
          type="text"
          name="location"
          placeholder="Location"
          style={styles.input}
          value={filters.location}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default SearchFilters;