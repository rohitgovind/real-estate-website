import React, { useState } from 'react';

function ContactForm({ propertyId, propertyTitle }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send this to your backend
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const styles = {
    form: {
      marginTop: '2rem',
      padding: '2rem',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
      borderRadius: '15px',
      boxShadow: '0 10px 20px rgba(72, 52, 212, 0.1)',
      animation: 'fadeIn 0.5s ease-out',
      transform: 'translateY(0)',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 15px 30px rgba(72, 52, 212, 0.15)',
      },
    },
    title: {
      color: '#4834d4',
      marginBottom: '1.5rem',
      fontSize: '1.8rem',
      fontWeight: '600',
      textAlign: 'center',
    },
    inputGroup: {
      marginBottom: '1.5rem',
      transition: 'transform 0.3s ease',
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      color: '#2f3640',
      fontWeight: '500',
      transition: 'color 0.3s ease',
    },
    input: {
      width: '100%',
      padding: '1rem',
      border: '2px solid #e4e8f0',
      borderRadius: '10px',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      '&:focus': {
        outline: 'none',
        borderColor: '#4834d4',
        boxShadow: '0 0 0 3px rgba(72, 52, 212, 0.1)',
      },
    },
    textarea: {
      width: '100%',
      padding: '1rem',
      border: '2px solid #e4e8f0',
      borderRadius: '10px',
      fontSize: '1rem',
      minHeight: '150px',
      transition: 'all 0.3s ease',
      '&:focus': {
        outline: 'none',
        borderColor: '#4834d4',
        boxShadow: '0 0 0 3px rgba(72, 52, 212, 0.1)',
      },
    },
    button: {
      background: 'linear-gradient(135deg, #4834d4 0%, #686de0 100%)',
      color: 'white',
      padding: '1rem 2rem',
      border: 'none',
      borderRadius: '10px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      width: '100%',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 5px 15px rgba(72, 52, 212, 0.3)',
      },
      '&:active': {
        transform: 'translateY(1px)',
      },
    },
    success: {
      padding: '1rem',
      background: '#d4edda',
      color: '#155724',
      borderRadius: '5px',
      marginTop: '1rem',
    }
  };

  if (submitted) {
    return (
      <div style={styles.form}>
        <div style={styles.success}>
          Thank you for your interest! We'll get back to you soon about {propertyTitle}.
        </div>
      </div>
    );
  }

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <h3 style={styles.title}>Interested in this property?</h3>
      
      <div style={styles.inputGroup}>
        <label style={styles.label}>Name</label>
        <input
          type="text"
          name="name"
          required
          style={styles.input}
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Email</label>
        <input
          type="email"
          name="email"
          required
          style={styles.input}
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Phone</label>
        <input
          type="tel"
          name="phone"
          style={styles.input}
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Message</label>
        <textarea
          name="message"
          required
          style={styles.textarea}
          value={formData.message}
          onChange={handleChange}
          placeholder="I'm interested in this property..."
        />
      </div>

      <button type="submit" style={styles.button}>
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;