import React, { useContext } from 'react'
import MenuContext from '../contexts/Menu';
import styles from './Menu.module.css';
import formatDate from '../utils/formatDate';
import emptyPlateImage from '../images/empty-plate.png';

export default function Menu() {
    const {menu} = useContext(MenuContext);

    return (
        <div className={styles.menuContainer}>
            <div id="menu" className={styles.menu}>
                <header className={styles.menuHeader}>
                    <div className={styles.menuHeader__content}>
                        <h2 className={styles.menuTitle}>MENU CATERING</h2>
                        <span className={styles.menuDate}>{`${formatDate(new Date(menu.dates.start))} - ${formatDate(new Date(menu.dates.end))}`}</span>
                    </div>
                    <img src={menu.menuThumbnail} alt="menu thumbnail" className={styles.menuThumbnail} />
                </header>
                <div className={styles.menuContent}>
                    <img 
                        alt="background-content" 
                        src={menu.backgroundImage} 
                        className={styles.menuBg}
                    />
                    <div className={styles.dayMenu}>
                        <img 
                            src={menu.days.senin.length ? `https:${menu.days.senin[0].thumbnail}` : emptyPlateImage} 
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
                            src={menu.days.selasa.length ? `https:${menu.days.selasa[0].thumbnail}` : emptyPlateImage} 
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
                            src={menu.days.rabu.length ? `https:${menu.days.rabu[0].thumbnail}` : emptyPlateImage} 
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
                            src={menu.days.kamis.length ? `https:${menu.days.kamis[0].thumbnail}` : emptyPlateImage} 
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
                            src={menu.days.jumat.length ? `https:${menu.days.jumat[0].thumbnail}` : emptyPlateImage} 
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
        </div>
    )
}
