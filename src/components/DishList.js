import React, { useContext } from 'react'
import DishesContext from '../contexts/Dishes';
import MenuContext from '../contexts/Menu';
import SettingsContext from '../contexts/Settings';
import styles from './DishList.module.css';

export default function DishList({nextPage, prevPage, page, isEndPage}) {

    const {filteredDishes} = useContext(DishesContext)
    const {settings} = useContext(SettingsContext);
    const {menu, setMenu} = useContext(MenuContext);

    const dishListItems = filteredDishes.map(dish => {
        return (
          <div 
            key={dish.id} 
            className={`${styles.dishListItem} ${menu.days[settings.day].some(dayDish => dayDish.id === dish.id) ? styles.selected : ''}`}
            onClick={() => {
              const newState = {...menu};
              if(!newState.days[settings.day].some(dayDish => dayDish.id === dish.id)){
                newState.days[settings.day].push(dish)
              }else{
                newState.days[settings.day] = newState.days[settings.day].filter(dayDish => dayDish.id !== dish.id)
              }
              setMenu(newState)
            }}
          >
            <div className={styles.content}>
              <div className={styles.dishListItem__info}>
                <h2>{dish.name}</h2>
              </div>
              <img
                className={styles.thumbnail}
                src={"https:" + dish.thumbnail} 
                alt={dish.name} />
            </div>
          </div>
        )
    })

    return (
        <div>
          <div className={styles.dishList} id="dish-list">
            {dishListItems}
          </div>
          <div>
            <button onClick={prevPage} disabled={page === 0}>PREVIOUS</button>
            <button onClick={nextPage} disabled={isEndPage}>NEXT</button>
          </div>
        </div>
    )
}
