import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddProperty(){
  const [form, setForm] = useState({
    title: '',
    price: '',
    location: '',
    type: '',
    bedrooms: '',
    bathrooms: '',
    area: '',
    image: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm(prev => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try{
      const res = await axios.post('http://localhost:5000/api/properties', form);
      setLoading(false);
      // navigate to the property list or the new property
      navigate('/properties');
    }catch(err){
      setLoading(false);
      setError(err.response?.data?.message || 'Failed to add property');
    }
  };

  const styles = {
    container: { maxWidth: '800px', margin: '2rem auto', padding: '1rem' },
    form: { display: 'grid', gap: '1rem' },
    input: { padding: '0.8rem', borderRadius: '6px', border: '1px solid #e4e8f0' },
    button: { padding: '1rem', background: '#00B98E', color: 'white', border: 'none', borderRadius: '6px' },
    error: { color: 'red' }
  };

  return (
    <div style={styles.container}>
      <h5 style={{color: '#00B98E'}}>Add Property</h5>
      <h2 style={{color: '#0E2E50'}}>List a New Property</h2>

      <form style={styles.form} onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" style={styles.input} value={form.title} onChange={handleChange} required />
        <input name="price" placeholder="Price" type="number" style={styles.input} value={form.price} onChange={handleChange} required />
        <input name="location" placeholder="Location" style={styles.input} value={form.location} onChange={handleChange} />
        <input name="type" placeholder="Type (e.g. Apartment)" style={styles.input} value={form.type} onChange={handleChange} />
        <input name="bedrooms" placeholder="Bedrooms" type="number" style={styles.input} value={form.bedrooms} onChange={handleChange} />
        <input name="bathrooms" placeholder="Bathrooms" type="number" style={styles.input} value={form.bathrooms} onChange={handleChange} />
        <input name="area" placeholder="Area (sqft)" type="number" style={styles.input} value={form.area} onChange={handleChange} />
        <input name="image" placeholder="Image URL (optional)" style={styles.input} value={form.image} onChange={handleChange} />
        <textarea name="description" placeholder="Description" style={{...styles.input, minHeight: 120}} value={form.description} onChange={handleChange} />
        {error && <div style={styles.error}>{error}</div>}
        <button type="submit" style={styles.button} disabled={loading}>{loading ? 'Adding...' : 'Add Property'}</button>
      </form>
    </div>
  );
}

export default AddProperty;
