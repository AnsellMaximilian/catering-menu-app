import React, { useEffect, useState } from 'react';
import './App.css';
import contentful from './contentful';
import Header from './components/Header';
import DishList from './components/DishList';
import DishesContext from './contexts/Dishes';
import MenuContext from './contexts/Menu';
import SettingsContext from './contexts/Settings';
import ToolBar from './components/ToolBar';
import MenuDetail from './components/MenuDetail';
import MenuPreview from './components/MenuPreview';
import Menu from './components/Menu';
import DomToImage from 'dom-to-image';

import defaultMenuThumbnail from './images/default-menu-thumbnail.jpg'

function App() {
  const [dishes, setDishes] = useState([]);
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [menu, setMenu] = useState({
    menuThumbnail: defaultMenuThumbnail,
    dates: {
        start: (new Date()).toISOString().slice(0, 10),
        end: new Date((new Date()).setDate((new Date()).getDate() + 7)).toISOString().slice(0, 10)
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

  const [isMenuDetailOpen, setIsMenuDetailOpen] = useState(false);
  const [isMenuPreviewOpen, setIsMenuPreviewOpen] = useState(false);
  const [isCreateMode, setIsCreateMode] = useState(true);

  const print = () => {
    setIsCreateMode(false);
    DomToImage.toPng(document.querySelector('#menu'))
      .then(function (dataUrl) {
          var link = document.createElement('a');
          link.download = `menu.jpeg`;
          link.href = dataUrl;
          link.click();
      })
      .catch(function (error) {
          console.error('oops, something went wrong!', error);
      });
  }

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
        console.log(dishes);
        setDishes(dishItems);
        setFilteredDishes(dishItems);
      })
  }, []);

  return (
    <div className="App">
      <DishesContext.Provider value={{dishes, filteredDishes, setDishes, setFilteredDishes}}>
        <MenuContext.Provider value={{menu, setMenu}}>
          <SettingsContext.Provider value={{settings, setSettings}}>
            <Header 
              openMenuDetail={() => setIsMenuDetailOpen(true)}
              openMenuPreview={() => setIsMenuPreviewOpen(true)}
              setIsCreateMode={setIsCreateMode}
              print={print}
            />
            {isCreateMode ? (
              <>
                <ToolBar/>
                <DishList />
              </> 
            ): (
              <>
                <button onClick={print}>PRINT</button>
                <Menu/>

              </>
            )
            }
            <MenuDetail open={isMenuDetailOpen} onClose={() => setIsMenuDetailOpen(false)}/>
            <MenuPreview open={isMenuPreviewOpen} onClose={() => setIsMenuPreviewOpen(false)}/>
          </SettingsContext.Provider>
        </MenuContext.Provider>
      </DishesContext.Provider>
      
    </div>
  );
}

export default App;
