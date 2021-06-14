import React, { useEffect, useState } from 'react';
import './App.css';
import contentful from './contentful';
import Header from './components/Header';
import DishList from './components/DishList';
import DishesContext from './contexts/Dishes';
import MenuContext from './contexts/Menu';
import SettingsContext from './contexts/Settings';
import ToolBar from './components/ToolBar';

function App() {
  const [dishes, setDishes] = useState([]);
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [menu, setMenu] = useState({
    dates: {
        start: '',
        end: ''
    },
    days: {
        senin: [],
        selasa: [],
        rabu: [],
        kamis: [],
        jumat: [],
    }
  });

  const [settings, setSettings] = useState({day: 'senin'});

  useEffect(() => {
    contentful.getEntries({
      'content_type': 'dish'
    })
      .then(dishes => {
        const dishItems = dishes.items.map(item => {
          const dishItem = {
            id: item.sys.id ,
            ...item.fields,
            thumbnail: item.fields.thumbnail.fields.file.url
          }
          return dishItem;
        });

        setDishes(dishItems);
        setFilteredDishes(dishItems);
      })
  }, []);

  return (
    <div className="App">
      <DishesContext.Provider value={{dishes, filteredDishes, setDishes, setFilteredDishes}}>
        <MenuContext.Provider value={{menu, setMenu}}>
          <SettingsContext.Provider value={{settings, setSettings}}>
            <Header />
            <ToolBar/>
            <DishList />
          </SettingsContext.Provider>
        </MenuContext.Provider>
      </DishesContext.Provider>
      
    </div>
  );
}

export default App;
