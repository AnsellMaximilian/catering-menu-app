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
              const newState = {...menu};
              if(!newState.days[settings.day].includes(dish)){
                newState.days[settings.day].push(dish)
              }else{
                newState.days[settings.day] = newState.days[settings.day].filter(currentDish => currentDish !== dish)
              }
              // console.log({dayArr: newState.days[settings.day], daySeninBrac: newState.days['senin'], daySeninDot: newState.days.senin})
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
        <div className={styles.dishList}>
            {dishListItems}
        </div>
    )
}
