import {createContext} from 'react';

const DishesContext = createContext({dishes: [], setDishes: null, filteredDishes: [], setFilteredDishes: null});

export default DishesContext;