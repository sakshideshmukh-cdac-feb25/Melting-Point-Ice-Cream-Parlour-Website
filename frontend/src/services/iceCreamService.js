// src/services/iceCreamService.js

export const fetchIceCreams = async () => {
  try {
    const response = await fetch('http://localhost:5000/icecreams');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching ice creams:', error);
  }
};
