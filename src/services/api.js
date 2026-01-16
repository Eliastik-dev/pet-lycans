import { animals as mockAnimals } from '../data/animals';

const API_BASE_URL = 'https://api-ninjas.com/api/animals';

const simulateDelay = (ms = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

export const fetchAnimals = async () => {
  try {
    await simulateDelay(800);
    const response = await fetch(`${API_BASE_URL}/animals`);
    
    if (!response.ok) {
      throw new Error('Erreur lors du chargement des animaux');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    await simulateDelay(500);
    return mockAnimals;
  }
};

export const fetchAnimalById = async (id) => {
  try {
    await simulateDelay(500);
    const response = await fetch(`${API_BASE_URL}/animals/${id}`);
    
    if (!response.ok) {
      throw new Error('Animal non trouvé');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    await simulateDelay(300);
    
    const animal = mockAnimals.find((a) => a.id === id);
    if (!animal) {
      throw new Error('Animal non trouvé');
    }
    return animal;
  }
};
