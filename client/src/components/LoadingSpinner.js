import React from 'react';

function LoadingSpinner() {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
    },
    spinner: {
      width: '50px',
      height: '50px',
      border: '4px solid #f3f3f3',
      borderTop: '4px solid #4834d4',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
    },
    '@keyframes spin': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.spinner} />
    </div>
  );
}

export default LoadingSpinner;