import React, { useContext } from 'react'
import MenuContext from '../contexts/Menu';
import SettingsContext from '../contexts/Settings';
import styles from './Toolbar.module.css';

export default function ToolBar({searchTerm, setSearchTerm}) {
    const {menu, setMenu} = useContext(MenuContext);
    const {settings, setSettings} = useContext(SettingsContext)

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
                <div className={styles.dayDashboard}>
                    <div className={styles.selectedDishes}>
                        <header>
                            <span className={styles.selectedDishes__title}>Selected Dishes</span>
                            <div>
                                <button
                                    onClick={() => {
                                        const newState = {...menu};
                                        newState.days[settings.day] = [];
                                        setMenu(newState)
                                    }}                                
                                >CLEAR</button>
                            </div>
                        </header>
                        {menu.days[settings.day].length > 0 ? (
                            <ul>
                                {menu.days[settings.day].map(dish => {
                                    return (
                                        <li key={dish.id}>
                                            <span>{dish.name}</span>
                                            <button
                                                onClick={() => {
                                                    const newState = {...menu};
                                                    newState.days[settings.day] = newState.days[settings.day].filter(dayDish => dayDish.id !== dish.id)
                                                    setMenu(newState)
                                                }}
                                            >&times;</button>
                                        </li>
                                    )
                                })}
                            </ul>
                        ) : (
                            <div>No dishes selected</div>
                        )
                        }
                    </div>
                </div>

            </div>
            <div className={styles.bottomBar}>
                <div className={styles.searchContainer}>
                    <label>
                        <span>SEARCH</span>
                        <input type="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                    </label>
                </div>
                <div className={styles.pageLimitContainer}>
                    <label>
                        <span>ITEMS PER PAGE</span>
                        <input 
                            type="number" 
                            value={settings.pageLimit} 
                            onChange={e => {
                                const value = parseInt(e.target.value);
                                if(!!value) {
                                    const newState = {...settings};
                                    newState.pageLimit = parseInt(value);
                                    setSettings(newState);
                                }
                            }}
                        /> 
                    </label>
                </div>
            </div>
        </div>
    )
}
