import React, { useState, useEffect } from 'react';
import emilyParkerImg from '../assets/images/emily-parker.png';
import michaelChanImg from '../assets/images/Michael-chan.png';
import emilyRodriquesImg from '../assets/images/emily-rodriques.png';

function TestimonialsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Emily Parker",
      role: "Home Buyer",
      image: emilyParkerImg,
      text: "The best platform I've found for finding my dream home. The agents were professional and helpful throughout the process.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Property Investor",
      image: michaelChanImg,
      text: "Outstanding service! Made property investment easy and profitable.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "First-time Buyer",
      image: emilyRodriquesImg,
      text: "As a first-time buyer, I couldn't have asked for better guidance and support.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const styles = {
    container: {
      overflow: 'hidden',
      position: 'relative',
      padding: '2rem 0',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
      borderRadius: '15px',
      boxShadow: '0 10px 20px rgba(72, 52, 212, 0.1)',
    },
    carousel: {
      display: 'flex',
      transition: 'transform 0.5s ease',
      transform: `translateX(-${currentSlide * 100}%)`,
    },
    slide: {
      minWidth: '100%',
      padding: '2rem',
      textAlign: 'center',
    },
    image: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      objectFit: 'cover',
      margin: '0 auto 1rem',
      border: '3px solid #4834d4',
    },
    name: {
      color: '#2f3640',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
    },
    role: {
      color: '#686de0',
      fontSize: '0.9rem',
      marginBottom: '1rem',
    },
    text: {
      color: '#2f3640',
      fontSize: '1rem',
      lineHeight: '1.6',
      maxWidth: '600px',
      margin: '0 auto',
      fontStyle: 'italic',
    },
    rating: {
      color: '#f9ca24',
      fontSize: '1.2rem',
      marginTop: '1rem',
    },
    dots: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.5rem',
      marginTop: '1rem',
    },
    dot: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor: '#e4e8f0',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    activeDot: {
      backgroundColor: '#4834d4',
      transform: 'scale(1.2)',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.carousel}>
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.id} style={styles.slide}>
            <img src={testimonial.image} alt={testimonial.name} style={styles.image} />
            <div style={styles.name}>{testimonial.name}</div>
            <div style={styles.role}>{testimonial.role}</div>
            <p style={styles.text}>"{testimonial.text}"</p>
            <div style={styles.rating}>
              {'★'.repeat(testimonial.rating)}
              {'☆'.repeat(5 - testimonial.rating)}
            </div>
          </div>
        ))}
      </div>
      <div style={styles.dots}>
        {testimonials.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              ...styles.dot,
              ...(currentSlide === index ? styles.activeDot : {})
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialsCarousel;