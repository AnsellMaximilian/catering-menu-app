import React, { useContext } from 'react'
import MenuContext from '../contexts/Menu';
import styles from './Menu.module.css';
import formatDate from '../utils/formatDate';

export default function Menu() {
    const {menu} = useContext(MenuContext);

    return (
        <div id="menu">
            <header className={styles.menuHeader}>
                <div className={styles.menuHeader__content}>
                    <h2 className={styles.menuTitle}>MENU CATERING</h2>
                    <span className={styles.menuDate}>{`${formatDate(new Date(menu.dates.start))} - ${formatDate(new Date(menu.dates.end))}`}</span>
                </div>
                <img src={menu.menuThumbnail} alt="menu thumbnail" className={styles.menuThumbnail} />
            </header>
            <div className={styles.menuContent}>
                <div className={styles.dayMenu}>
                    <img 
                        src={`https:${menu.days.senin.length ? menu.days.senin[0].thumbnail : ''}`} 
                        alt="day-thumbnail"
                        className={styles.dayMenu__thumbnail}    
                    />
                    <div className={styles.dayMenu__content}>
                        <h3 className={styles.dayMenu__title}>Senin</h3>
                        <ul className={styles.dayMenu__list}>
                            {menu.days.senin.map(dish => (
                                <li key={dish.id}>
                                    <span>{dish.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.dayMenu}>
                    <img 
                        src={`https:${menu.days.selasa.length ? menu.days.selasa[0].thumbnail : ''}`} 
                        alt="day-thumbnail"
                        className={styles.dayMenu__thumbnail}    
                    />
                    <div className={styles.dayMenu__content}>
                        <h3 className={styles.dayMenu__title}>selasa</h3>
                        <ul className={styles.dayMenu__list}>
                            {menu.days.selasa.map(dish => (
                                <li key={dish.id}>
                                    <span>{dish.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={styles.dayMenu}>
                    <img 
                        src={`https:${menu.days.rabu.length ? menu.days.rabu[0].thumbnail : ''}`} 
                        alt="day-thumbnail"
                        className={styles.dayMenu__thumbnail}    
                    />
                    <div className={styles.dayMenu__content}>
                        <h3 className={styles.dayMenu__title}>rabu</h3>
                        <ul className={styles.dayMenu__list}>
                            {menu.days.rabu.map(dish => (
                                <li key={dish.id}>
                                    <span>{dish.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={styles.dayMenu}>
                    <img 
                        src={`https:${menu.days.kamis.length ? menu.days.kamis[0].thumbnail : ''}`} 
                        alt="day-thumbnail"
                        className={styles.dayMenu__thumbnail}    
                    />
                    <div className={styles.dayMenu__content}>
                        <h3 className={styles.dayMenu__title}>kamis</h3>
                        <ul className={styles.dayMenu__list}>
                            {menu.days.kamis.map(dish => (
                                <li key={dish.id}>
                                    <span>{dish.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={styles.dayMenu}>
                    <img 
                        src={`https:${menu.days.jumat.length ? menu.days.jumat[0].thumbnail : ''}`} 
                        alt="day-thumbnail"
                        className={styles.dayMenu__thumbnail}    
                    />
                    <div className={styles.dayMenu__content}>
                        <h3 className={styles.dayMenu__title}>jumat</h3>
                        <ul className={styles.dayMenu__list}>
                            {menu.days.jumat.map(dish => (
                                <li key={dish.id}>
                                    <span>{dish.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
