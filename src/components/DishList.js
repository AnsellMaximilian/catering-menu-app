import React, { useContext } from 'react'
import DishesContext from '../contexts/Dishes';
import MenuContext from '../contexts/Menu';
import SettingsContext from '../contexts/Settings';
import styles from './DishList.module.css';

export default function DishList() {

    const {filteredDishes} = useContext(DishesContext)
    const {settings} = useContext(SettingsContext);
    const {menu, setMenu} = useContext(MenuContext);

    const dishListItems = filteredDishes.map(dish => {
        return (
          <div 
            key={dish.id} 
            className={`${styles.dishListItem} ${menu.days[settings.day].includes(dish) ? styles.selected : ''}`}
            onClick={() => {
              setMenu(state => {
                const newState = {...state};
                if(!newState.days[settings.day].includes(dish)) newState.days[settings.day].push(dish);
                console.log(newState)
                return newState;
              })
            }}
          >
            <div className={styles.dishListItem__info}>
              <h2>{dish.name}</h2>
            </div>
            <img
              className={styles.thumbnail}
              src={"https:" + dish.thumbnail} 
              alt={dish.name} />
          </div>
        )
    })

    return (
        <div className={styles.dishList}>
            {dishListItems}
        </div>
    )
}
