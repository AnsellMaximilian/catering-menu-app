import React, { useContext } from 'react'
import DishesContext from '../contexts/Dishes';
import MenuContext from '../contexts/Menu';
import SettingsContext from '../contexts/Settings';
import styles from './DishList.module.css';

export default function DishList({page, setPage, itemTotal}) {

    const {filteredDishes} = useContext(DishesContext)
    const {settings} = useContext(SettingsContext);
    const {menu, setMenu} = useContext(MenuContext);

    const nextPage = () => setPage(currentPage => (currentPage + 1));
    const prevPage = () => setPage(currentPage => currentPage === 0 ? 1 : (currentPage - 1))

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
            <button onClick={nextPage} disabled={itemTotal===(settings.pageLimit*(page+1))}>NEXT</button>
          </div>
          <div>
            {
              Array.from(Array(itemTotal >= settings.pageLimit ? itemTotal/settings.pageLimit : 1)).map((item, index) => (
                <button 
                  key={index} 
                  disabled={page === index}
                  onClick={() => setPage(index)}
                >
                  {index+1}
                </button>
              ))
            }
          </div>
        </div>
    )
}
