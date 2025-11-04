import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    // Initialize from localStorage
    const savedFavorites = localStorage.getItem('propertyFavorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    // Save to localStorage whenever favorites change
    localStorage.setItem('propertyFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (propertyId) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(propertyId)) {
        return prevFavorites.filter(id => id !== propertyId);
      } else {
        return [...prevFavorites, propertyId];
      }
    });
  };

  const isFavorite = (propertyId) => {
    return favorites.includes(propertyId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}