import React, { useContext, useEffect, useState } from 'react'
import DishesContext from '../contexts/Dishes';
import MenuContext from '../contexts/Menu';
import SettingsContext from '../contexts/Settings';
import styles from './Toolbar.module.css';

export default function ToolBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const {dishes, setFilteredDishes} = useContext(DishesContext);
    const {menu, setMenu} = useContext(MenuContext);
    const {settings, setSettings} = useContext(SettingsContext)

    useEffect(() => {
        if(!!searchTerm){
            setFilteredDishes(dishes.filter(dish => dish.name.toLowerCase().includes(searchTerm.toLowerCase())))
        }else{
            setFilteredDishes(dishes)
        }
    }, [searchTerm, setFilteredDishes, dishes]);

    const setDay = (day) => {
        setSettings(state => {
            const newState = {...state};
            newState.day = day;
            return newState;
        })
    }

    return (
        <div>
            <div>
                <span>Bikin Menu</span>
                <div className={styles.dayTabs}>
                    <span 
                        className={`${styles.day} ${settings.day === 'senin' ? styles.selected : ''}`} 
                        onClick={() => setDay('senin')}>Senin</span>
                    <span 
                        className={`${styles.day} ${settings.day === 'selasa' ? styles.selected : ''}`} 
                        onClick={() => setDay('selasa')}>Selasa</span>
                    <span 
                        className={`${styles.day} ${settings.day === 'rabu' ? styles.selected : ''}`} 
                        onClick={() => setDay('rabu')}>Rabu</span>
                    <span 
                        className={`${styles.day} ${settings.day === 'kamis' ? styles.selected : ''}`} 
                        onClick={() => setDay('kamis')}>Kamis</span>
                    <span 
                        className={`${styles.day} ${settings.day === 'jumat' ? styles.selected : ''}`} 
                        onClick={() => setDay('jumat')}>Jumat</span>
                </div>
                <div>
                    <div>
                        <span>Selected Dishes</span>
                        <ul>
                            {dishes.filter(dish => menu.days[settings.day].includes(dish)).map(dish => {
                                return (
                                    <li key={dish.id}>
                                        {dish.name}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

            </div>
            <div>
                <span>Search</span>
                <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>
        </div>
    )
}
